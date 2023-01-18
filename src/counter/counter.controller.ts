import { Controller, Get, Sse } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { from, map, Observable } from "rxjs"
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
	getState(): CounterMessagePayload {
		return this.counterService.getState()
	}
}
