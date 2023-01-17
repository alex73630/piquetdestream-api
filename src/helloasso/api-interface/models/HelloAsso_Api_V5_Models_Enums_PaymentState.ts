/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * * `Pending` - A payment scheduled at a later date, not yet processed.
 * * `Authorized` - The payment has been authorized, validated, processed.
 * * `Refused` - The payment has been refused by the bank.
 * * `Unknown`
 * * `Registered` - Represents a payment made offline.
 * Probably for an item of type
 * * `Refunded` - The payment has been refunded.
 * * `Refunding` - The payment is being refunded.
 * * `Contested` - Payment has been contested by the contributor
 */
export enum HelloAsso_Api_V5_Models_Enums_PaymentState {
	PENDING = "Pending",
	AUTHORIZED = "Authorized",
	REFUSED = "Refused",
	UNKNOWN = "Unknown",
	REGISTERED = "Registered",
	REFUNDED = "Refunded",
	REFUNDING = "Refunding",
	CONTESTED = "Contested"
}
