import { Injectable } from "@nestjs/common"
import { Subject } from "rxjs"
import { CounterMessage, CounterMessagePayload } from "./interfaces/counter-message.interface"

@Injectable()
export class CounterService {
	public counterSubject: Subject<CounterMessage>

	constructor() {
		this.counterSubject = new Subject()
	}

	public updateCounter(amount: number): void {
		const payload: CounterMessagePayload = {
			amount,
			updatedAt: Date.now()
		}
		this.counterSubject.next({ data: payload, type: "counter-update" })
	}

	public newDonation(amount: number): void {
		const payload: CounterMessagePayload = {
			amount
		}
		this.counterSubject.next({ data: payload, type: "new-donation" })
	}
}
