import { Injectable } from "@nestjs/common"
import { Subject } from "rxjs"
import { CounterMessage, CounterMessagePayload } from "./interfaces/counter-message.interface"

@Injectable()
export class CounterService {
	public counterSubject: Subject<CounterMessage>

	private counter = 0
	private updatedAt = Date.now()

	constructor() {
		this.counterSubject = new Subject()
	}

	public updateCounter(amount: string): void {
		const payload: CounterMessagePayload = {
			amount,
			updatedAt: Date.now()
		}

		this.counter = parseFloat(amount)
		this.updatedAt = Date.now()
		this.counterSubject.next({ data: payload, type: "counter-update" })
	}

	public newDonation(amount: string, name: string): void {
		const payload: CounterMessagePayload = {
			amount,
			name
		}

		this.counter += parseFloat(amount)
		this.updatedAt = Date.now()
		this.counterSubject.next({ data: payload, type: "new-donation" })
		this.updateCounter(this.counter.toFixed(2))
	}

	public getState(): CounterMessagePayload {
		return {
			amount: this.counter.toFixed(2),
			updatedAt: this.updatedAt
		}
	}
}
