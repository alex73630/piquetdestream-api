import { Controller, Get, Post, Query, Sse, UseGuards } from "@nestjs/common"
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger"
import { from, map, Observable } from "rxjs"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
import { DatabaseService } from "../database/database.service"
import { DonationPerNameDto } from "../database/dto/donation-per-name.dto"
import { LiteDonationPayload } from "../redis/interfaces/redis.interface"
import { CounterService } from "./counter.service"
import { CounterDonationDto } from "./dto/counter-donation.dto"
import { CounterDonationsQueryDto } from "./dto/counter-donations-query.dto"
import { CounterMessage, CounterMessagePayload } from "./interfaces/counter-message.interface"

@ApiTags("Counter")
@Controller("counter")
export class CounterController {
	constructor(private readonly counterService: CounterService, private readonly databaseService: DatabaseService) {}

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
	async getTransactions(): Promise<LiteDonationPayload[]> {
		return this.counterService.getTransactions()
	}

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Post("reset")
	async reset(): Promise<void> {
		return this.counterService.resetCounter()
	}

	@Get("donations")
	@ApiQuery({ name: "limit", required: false, type: Number })
	@ApiQuery({ name: "offset", required: false, type: Number })
	async getDonations(@Query() query: CounterDonationsQueryDto): Promise<CounterDonationDto[]> {
		const results = await this.databaseService.getDonations(query.offset, query.limit)
		return results.map((result) => new CounterDonationDto(result))
	}

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Get("leaderboard")
	async getLeaderboard(): Promise<DonationPerNameDto[]> {
		return this.databaseService.getDonationsPerName()
	}
}
