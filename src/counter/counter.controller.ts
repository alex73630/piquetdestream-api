import { Controller, Get, Post, Sse, UseGuards } from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { from, map, Observable } from "rxjs"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
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

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Get("transactions")
	async getTransactions(): Promise<DonationPayload[]> {
		return this.counterService.getTransactions()
	}

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Post("reset")
	async reset(): Promise<void> {
		return this.counterService.resetCounter()
	}
}
