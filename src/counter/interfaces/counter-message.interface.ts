export interface NewDonationEvent {
	data: NewDonationPayload
	id?: string
	type: "new-donation"
	retry?: number
}

export interface NewDonationPayload {
	// Amount of the donation in euros
	amount: string
	name?: string
}

export interface CounterUpdateEvent {
	data: CounterUpdatePayload
	id?: string
	type: "counter-update"
	retry?: number
}

export interface CounterUpdatePayload {
	// Total amount of donations in euros
	amount: string
	// Timestamp in milliseconds
	updatedAt: number
}

export interface KeepAliveEvent {
	data: any
	id?: string
	type: "keep-alive"
	retry?: number
}

export type CounterMessage = NewDonationEvent | CounterUpdateEvent | KeepAliveEvent

export type CounterMessagePayload = NewDonationPayload | CounterUpdatePayload
