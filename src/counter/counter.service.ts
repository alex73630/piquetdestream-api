import { Injectable, Logger } from "@nestjs/common"
import { Cron, CronExpression } from "@nestjs/schedule"
import { Subject } from "rxjs"
import { DonationPayload } from "../redis/interfaces/redis.interface"
import { RedisService } from "../redis/redis.service"
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
			amount: this.amountToFloat(amount),
			updatedAt: Date.now()
		}

		this.redisService.setCounterValue(amount)
		this.counterSubject.next({ data: payload, type: "counter-update" })
	}

	public async newDonation(amount: number, id: number, updateRedis = true): Promise<void> {
		const payload: CounterMessagePayload = {
			amount: this.amountToFloat(amount)
		}

		if (updateRedis) {
			let { amount: counter } = await this.redisService.getCounterValue()

			if (isNaN(counter)) {
				counter = 0
			}
			counter += amount
			this.redisService.addDonation({ id, amount })
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
			amount: this.amountToFloat(payload.amount),
			updatedAt: payload.updatedAt
		}
	}

	public async getTransactions(): Promise<DonationPayload[]> {
		return this.redisService.getDonations()
	}

	public async updateTransactions(transactions: DonationPayload[]): Promise<void> {
		transactions.forEach((transaction) => {
			this.redisService.addDonation(transaction)
		})
	}

	public async resetCounter(): Promise<void> {
		return this.redisService.resetCounter()
	}

	private amountToFloat(amount: number): string {
		return (amount / 100).toFixed(2)
	}

	@Cron("*/10 * * * * *")
	private keepAlive(): void {
		this.counterSubject.next({ data: { time: new Date().getTime() }, type: "keep-alive" })
	}
}