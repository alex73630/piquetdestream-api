import { Controller, Get, Post, Sse } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { from, map, Observable } from "rxjs"
import { DonationPayload } from "../redis/interfaces/redis.interface"
import { CounterService } from "./counter.service"
import { CounterMessage, CounterMessagePayload } from "./interfaces/counter-message.interface"

@ApiTags("Counter")
@Controller("counter")
export class CounterController {
	constructor(private readonly counterService: CounterService) {}

	@Sse("sse")
	counterSse(): Observable<CounterMessage> {
		return from(this.counterService.counterSubject).pipe(map((data) => data))
	}

	@Get("state")
	async getState(): Promise<CounterMessagePayload> {
		return this.counterService.getState()
	}

	@Get("transactions")
	async getTransactions(): Promise<DonationPayload[]> {
		return this.counterService.getTransactions()
	}

	@Post("reset")
	async reset(): Promise<void> {
		return this.counterService.resetCounter()
	}
}
