/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Carts_CheckoutPayer } from "./HelloAsso_Api_V5_Models_Carts_CheckoutPayer"
import type { HelloAsso_Api_V5_Models_Carts_CheckoutTerm } from "./HelloAsso_Api_V5_Models_Carts_CheckoutTerm"

export type HelloAsso_Api_V5_Models_Carts_InitCheckoutBody = {
	/**
	 * Total amount, all taxes included, in cents (required)
	 * Must be equal to the sum of the initial amount and subsequent terms
	 */
	totalAmount: number
	/**
	 * The amount for the first term, all taxes included, in cents (required)
	 */
	initialAmount: number
	/**
	 * Item name (required)
	 * A text describing what the user paid for ('Renew license', '3 tickets', donation, etc).
	 * Will be displayed in the near future in the user space and in the organization back office
	 */
	itemName: string
	/**
	 * Url followed by the contributor if he wants to return to its previous site
	 */
	backUrl: string
	/**
	 * Url called in case of an error during the checkout process
	 */
	errorUrl: string
	/**
	 * Url called after the payment
	 */
	returnUrl: string
	/**
	 * The sale (or a part of) is a donation
	 */
	containsDonation: boolean
	/**
	 * The list of future terms (if applicable)
	 */
	terms?: Array<HelloAsso_Api_V5_Models_Carts_CheckoutTerm>
	/**
	 * The payer (optional)
	 */
	payer?: HelloAsso_Api_V5_Models_Carts_CheckoutPayer
	/**
	 * Metadata (optional)
	 * Json object (max length : 20000)
	 */
	metadata?: any
	/**
	 * Affilae tracking parameter (optional)
	 */
	trackingParameter?: string
}
