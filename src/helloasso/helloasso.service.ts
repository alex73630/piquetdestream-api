import { Injectable, Logger } from "@nestjs/common"
import { CronExpression, SchedulerRegistry } from "@nestjs/schedule"
import { CronJob } from "cron"
import { ExtendedConfigService } from "../config/config.service"
import { HelloAssoOptions } from "../config/helloasso/helloasso-config.interface"
import { CounterService } from "../counter/counter.service"
import { RedisService } from "../redis/redis.service"
import {
	HelloAssoApi,
	HelloAsso_Api_V5_Models_Statistics_OrderDetail,
	HelloAsso_Api_V5_Models_Statistics_PaymentDetail
} from "./api-interface"
import { HelloAssoApiAuthTokenResponse } from "./interfaces/helloasso-auth.interface"
import { HelloAssoNotification } from "./interfaces/helloasso-notification.interface"
import * as dayjs from "dayjs"
import { HelloAssoDonationPayload } from "./interfaces/helloasso-donation.interface"
import { DatabaseService } from "../database/database.service"

@Injectable()
export class HelloAssoService {
	private readonly apiClient: HelloAssoApi
	private readonly logger: Logger = new Logger(HelloAssoService.name)

	private getDonationsSinceLastFetchCronJob: CronJob

	constructor(
		private readonly counterService: CounterService,
		private readonly configService: ExtendedConfigService,
		private readonly redisService: RedisService,
		private readonly schedulerRegistry: SchedulerRegistry,
		private readonly databaseService: DatabaseService
	) {
		this.apiClient = new HelloAssoApi({
			TOKEN: () => this.resolveAccessToken()
		})

		const manualFetchEnabled = this.configService.get<HelloAssoOptions["enableManualFetching"]>(
			"helloasso.enableManualFetching"
		)

		let cronExpression = CronExpression.EVERY_30_MINUTES

		if (manualFetchEnabled) {
			cronExpression = CronExpression.EVERY_MINUTE
		}

		this.logger.debug(`Cron expression: ${cronExpression}, manual fetch enabled: ${manualFetchEnabled}`)

		this.getDonationsSinceLastFetchCronJob = new CronJob(cronExpression, () => this.getDonationsSinceLastFetch())

		this.schedulerRegistry.addCronJob("getDonationsSinceLastFetch", this.getDonationsSinceLastFetchCronJob)
		this.getDonationsSinceLastFetchCronJob.start()
	}

	async handleNotifications(payload: HelloAssoNotification) {
		switch (payload.eventType) {
			case "Order":
				this.logger.debug("Order notification received")
				return this.handleOrderNotification(payload.data)
			case "Payment":
				this.logger.debug("Payment notification received")
				return this.handlePaymentNotification(payload.data)
			case "Form":
				this.logger.warn("Form notification not handled")
				return
		}
	}

	private async handleOrderNotification(data: HelloAsso_Api_V5_Models_Statistics_OrderDetail) {
		// Check if order.formSlug is "2" for our form
		if (data.formSlug !== "2") {
			this.logger.debug("Donation not for our form, ignoring")
			return
		}

		// Check if donation exists on redis
		const donationExists = await this.redisService.getDonation(data.id)
		if (donationExists) {
			this.logger.debug("Donation already exists, ignoring")
			return
		}

		const payload = this.buildDonationPayload(data)

		// Send data to our counter
		this.logger.debug("Sending donation to counter")
		this.counterService.newDonation(payload)
		this.databaseService.insertDonation(payload)
	}

	private async handlePaymentNotification(_data: HelloAsso_Api_V5_Models_Statistics_PaymentDetail) {
		// ...
	}

	async updateTotalDonationsFromApi() {
		const lastFetch = new Date()
		const response = await this.apiClient.ordersItems.ordersGetFormOrders(
			"caisse-de-solidarite-2",
			"2",
			"Donation",
			null,
			null,
			null,
			1,
			100,
			null,
			true,
			null
		)

		const donations = response.data.map((donation) => this.buildDonationPayload(donation))

		this.logger.debug(`Fetched ${donations.length} donations`)

		let continuationToken = response.pagination.totalCount > 100 ? response.pagination.continuationToken : null
		let pageCounter = 1

		// Loop through all donations and add them to the total using pagination.continuationToken
		while (continuationToken) {
			pageCounter++
			this.logger.debug(`Fetching next page of donations`)
			const response = await this.apiClient.ordersItems.ordersGetFormOrders(
				"caisse-de-solidarite-2",
				"2",
				"Donation",
				null,
				null,
				null,
				null,
				100,
				continuationToken,
				true,
				null
			)

			const moreDonations = response.data.map((donation) => this.buildDonationPayload(donation))

			if (moreDonations.length === 0) {
				break
			}

			this.logger.debug(`Page: ${pageCounter}, Fetched ${moreDonations.length} donations`)
			donations.push(...moreDonations)
			continuationToken = response.pagination.continuationToken
		}

		const total = donations.reduce((acc, curr) => acc + curr.amount, 0)

		this.logger.debug(`Total donations: ${(total / 100).toFixed(2)}€`)
		this.counterService.updateCounter(total)
		this.redisService.addDonations(donations)
		this.databaseService.insertDonations(donations)
		this.redisService.setLastDonationFetch(lastFetch)
		return { total: (total / 100).toFixed(2) }
	}

	async getDonationsSinceLastFetch() {
		this.logger.debug("Fetching donations since last fetch date...")

		const redisLastFetch = await this.redisService.getLastDonationFetch()
		const lastFetch = redisLastFetch ? dayjs(redisLastFetch).subtract(5, "minute").toDate() : null
		const newFetch = new Date()

		if (!lastFetch) {
			this.logger.debug("No last fetch date found, fetching all donations")
			return this.updateTotalDonationsFromApi()
		}

		const response = await this.apiClient.ordersItems.ordersGetFormOrders(
			"caisse-de-solidarite-2",
			"2",
			"Donation",
			lastFetch.toISOString(),
			dayjs(newFetch).add(30, "second").toDate().toISOString(),
			null,
			1,
			100,
			null,
			true,
			null
		)

		const donations = response.data.map((donation) => this.buildDonationPayload(donation))

		let continuationToken = response.pagination.totalCount > 100 ? response.pagination.continuationToken : null
		let pageCounter = 1

		// Loop through all donations and add them to the total using pagination.continuationToken
		while (continuationToken) {
			pageCounter++
			this.logger.debug(`Fetching next page of donations`)
			const response = await this.apiClient.ordersItems.ordersGetFormOrders(
				"caisse-de-solidarite-2",
				"2",
				"Donation",
				lastFetch.toISOString(),
				dayjs(newFetch).add(30, "second").toDate().toISOString(),
				null,
				null,
				100,
				continuationToken,
				true,
				null
			)

			const moreDonations = response.data.map((donation) => this.buildDonationPayload(donation))

			if (moreDonations.length === 0) {
				break
			}

			this.logger.debug(`Page: ${pageCounter}, Fetched ${moreDonations.length} donations`)
			donations.push(...moreDonations)
			continuationToken = response.pagination.continuationToken
		}

		// Deduplicate donations by id
		const existingDonations = await this.redisService.getLiteDonations()
		const deduplicatedDonations = donations.filter(
			(donation) => !existingDonations.find((existing) => existing.id === donation.id)
		)

		const total = deduplicatedDonations.reduce((acc, curr) => acc + curr.amount, 0)

		this.logger.debug(`Total donations since last fetch: ${(total / 100).toFixed(2)}€`)
		// Add total to the current total
		const { amount: currentTotal } = await this.redisService.getCounterValue()
		this.counterService.updateCounter(currentTotal + total)

		if (deduplicatedDonations.length > 0) {
			this.redisService.addDonations(deduplicatedDonations)
			this.databaseService.insertDonations(deduplicatedDonations)
			// Loop on donations and send them to the websocket
			deduplicatedDonations.forEach((donation) => {
				this.counterService.newDonation(donation, false)
			})
		}

		this.redisService.setLastDonationFetch(newFetch)
		return { total: (total / 100).toFixed(2) }
	}

	async resolveAccessToken(forceRefresh = false) {
		// Check if access token is still valid
		const accessToken = await this.redisService.getAccessToken()
		if (accessToken) {
			return accessToken
		}

		// Check if refresh token is still valid
		const refreshToken = await this.redisService.getRefreshToken()
		let response: Response

		if (refreshToken && !forceRefresh) {
			// If so, use it to get a new access token
			response = await fetch("https://api.helloasso.com/oauth2/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new URLSearchParams({
					client_id: this.configService.get<HelloAssoOptions["clientId"]>("helloasso.clientId"),
					grant_type: "refresh_token",
					refresh_token: refreshToken
				})
			})
		} else {
			// retrieve access token from oauth2 using fetch
			response = await fetch("https://api.helloasso.com/oauth2/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new URLSearchParams({
					client_id: this.configService.get<HelloAssoOptions["clientId"]>("helloasso.clientId"),
					client_secret: this.configService.get<HelloAssoOptions["clientSecret"]>("helloasso.clientSecret"),
					grant_type: "client_credentials"
				})
			})
		}

		const date = new Date(response.headers.get("Date"))

		const data = (await response.json()) as HelloAssoApiAuthTokenResponse

		if (refreshToken && !data.access_token) {
			this.logger.warn("No access token found in response, forcing refresh token")
			return this.resolveAccessToken(true)
		}

		// Set expiration date from data expires_in
		const accessExpirationDate = new Date(date.getTime() + data.expires_in * 1000)

		// Set expiration date for refresh token (valid 1 month)
		const refreshExpirationDate = new Date(date.getTime() + 2592000000)

		// Set access token in redis
		await this.redisService.setAccessToken(data.access_token, accessExpirationDate)

		// Set refresh token in redis
		await this.redisService.setRefreshToken(data.refresh_token, refreshExpirationDate)

		return data.access_token
	}

	private getCustomFields(data: HelloAsso_Api_V5_Models_Statistics_OrderDetail) {
		const donationName =
			data.items && data.items[0] && data.items[0].customFields
				? data.items[0]?.customFields?.find((field) => field.name === "Ton pseudo Twitch")?.answer || null
				: null

		const donationAnonymous =
			data.items && data.items[0] && data.items[0].customFields
				? data.items[0]?.customFields?.find((field) => field.name === "Anonymisation ?")?.answer === "Oui"
				: false

		const donationMessage =
			data.items && data.items[0] && data.items[0].customFields
				? data.items[0]?.customFields?.find((field) => field.name === "Votre message de soutien")?.answer ||
				  null
				: null

		return {
			name: donationName,
			anonymous: donationAnonymous,
			message: donationMessage
		}
	}

	private buildDonationPayload(donation: HelloAsso_Api_V5_Models_Statistics_OrderDetail): HelloAssoDonationPayload {
		const { name, anonymous, message } = this.getCustomFields(donation)

		return {
			id: donation.id,
			name: anonymous ? null : name,
			amount: donation.amount.total,
			message,
			createdAt: new Date(donation.meta.createdAt).getTime()
		}
	}
}
