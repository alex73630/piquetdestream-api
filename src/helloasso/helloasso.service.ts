import { Injectable, Logger } from "@nestjs/common"
import { ExtendedConfigService } from "../config/config.service"
import { HelloAssoOptions } from "../config/helloasso/helloasso-config.interface"
import { CounterService } from "../counter/counter.service"
import { NewDonationPayload } from "../counter/interfaces/counter-message.interface"
import {
	HelloAssoApi,
	HelloAsso_Api_V5_Models_Statistics_OrderDetail,
	HelloAsso_Api_V5_Models_Statistics_PaymentDetail
} from "./api-interface"
import { HelloAssoNotification } from "./interfaces/helloasso-notification.interface"

@Injectable()
export class HelloAssoService {
	private readonly apiClient: HelloAssoApi
	private readonly logger: Logger = new Logger(HelloAssoService.name)

	constructor(
		private readonly counterService: CounterService,
		private readonly configService: ExtendedConfigService
	) {
		this.apiClient = new HelloAssoApi()
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

		// Prepare data for our counter
		const payload: NewDonationPayload = {
			amount: (data.amount.total / 100).toFixed(2),
			name: data.payer.firstName
		}

		// Send data to our counter
		this.logger.debug("Sending donation to counter")
		this.counterService.newDonation(payload.amount, payload.name)
	}

	private async handlePaymentNotification(_data: HelloAsso_Api_V5_Models_Statistics_PaymentDetail) {
		// ...
	}

	async updateTotalDonationsFromApi() {
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
			null,
			null,
			`Bearer ${this.configService.get<HelloAssoOptions["accessToken"]>("helloasso.accessToken")}`
		)
		let total = response.data.reduce((acc, curr) => acc + curr.amount.total, 0)

		// Loop through all donations and add them to the total using pagination.totalPages
		const totalPages = response.pagination.totalPages
		if (totalPages > 1) {
			for (let i = 2; i <= totalPages; i++) {
				const response = await this.apiClient.ordersItems.ordersGetFormOrders(
					"caisse-de-solidarite-2",
					"2",
					"Donation",
					null,
					null,
					null,
					i,
					100,
					null,
					null,
					null,
					`Bearer ${this.configService.get<HelloAssoOptions["accessToken"]>("helloasso.accessToken")}`
				)
				total += response.data.reduce((acc, curr) => acc + curr.amount.total, 0)
			}
		}

		this.logger.debug(`Total donations: ${(total / 100).toFixed(2)}€`)
		this.counterService.updateCounter((total / 100).toFixed(2))
		return { total: (total / 100).toFixed(2) }
	}
}
