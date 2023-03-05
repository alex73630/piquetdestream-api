import { Injectable, Logger } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"
import { Subject } from "rxjs"
import { HelloAssoDonationPayload } from "../helloasso/interfaces/helloasso-donation.interface"
import { LiteDonationPayload } from "../redis/interfaces/redis.interface"
import { RedisService } from "../redis/redis.service"
import { amountToFloat } from "../utils/utils"
import { CounterMessage, CounterMessagePayload } from "./interfaces/counter-message.interface"

@Injectable()
export class CounterService {
	private readonly logger = new Logger(CounterService.name)
	public counterSubject: Subject<CounterMessage>

	constructor(private readonly redisService: RedisService) {
		this.counterSubject = new Subject()
	}

	public updateCounter(amount: number): void {
		const payload: CounterMessagePayload = {
			amount: amountToFloat(amount),
			updatedAt: Date.now()
		}

		this.redisService.setCounterValue(amount)
		this.counterSubject.next({ data: payload, type: "counter-update" })
	}

	public async newDonation(data: HelloAssoDonationPayload, updateRedis = true): Promise<void> {
		const payload: CounterMessagePayload = {
			id: data.id,
			amount: amountToFloat(data.amount),
			name: data.name,
			message: data.message,
			createdAt: data.createdAt
		}

		if (updateRedis) {
			let { amount: counter } = await this.redisService.getCounterValue()

			if (isNaN(counter)) {
				counter = 0
			}
			counter += data.amount
			this.redisService.addDonation(data)
			this.updateCounter(counter)
		}

		this.counterSubject.next({ data: payload, type: "new-donation" })
	}

	public async getState(): Promise<CounterMessagePayload> {
		const payload = await this.redisService.getCounterValue()

		this.logger.debug(`Counter state: ${payload.amount} at ${payload.updatedAt}`)

		if (isNaN(payload.amount)) {
			payload.amount = 0
			payload.updatedAt = Date.now()
		}

		return {
			amount: amountToFloat(payload.amount),
			updatedAt: payload.updatedAt
		}
	}

	public async getTransactions(): Promise<LiteDonationPayload[]> {
		return this.redisService.getLiteDonations()
	}

	public async updateTransactions(transactions: HelloAssoDonationPayload[]): Promise<void> {
		transactions.forEach((transaction) => {
			this.redisService.addDonation(transaction)
		})
	}

	public async resetCounter(): Promise<void> {
		return this.redisService.resetCounter()
	}

	public async sendFakeDonationToSse(): Promise<void> {
		const amount = Math.random() * 10000
		const payload = await this.redisService.getCounterValue()
		const total = payload.amount + amount
		this.counterSubject.next({
			data: {
				id: 0,
				amount: amountToFloat(amount),
				name: "Fake",
				message: "Fake donation",
				createdAt: Date.now()
			},
			type: "new-donation"
		})
		this.counterSubject.next({
			data: {
				amount: amountToFloat(total),
				updatedAt: Date.now()
			},
			type: "counter-update"
		})
	}

	@Cron("*/10 * * * * *")
	private keepAlive(): void {
		this.counterSubject.next({ data: { time: new Date().getTime() }, type: "keep-alive" })
	}
}
