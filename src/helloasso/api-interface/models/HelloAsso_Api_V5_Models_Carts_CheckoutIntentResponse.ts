/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Statistics_OrderDetail } from "./HelloAsso_Api_V5_Models_Statistics_OrderDetail"

export type HelloAsso_Api_V5_Models_Carts_CheckoutIntentResponse = {
	/**
	 * Metadata (Json object)
	 * Only if metadata were sent on the checkout form initialization
	 */
	metadata?: any
	/**
	 * Order linked to the checkout intent, if the payment was successfully made
	 */
	order?: HelloAsso_Api_V5_Models_Statistics_OrderDetail
	/**
	 * Id of the checkout intent
	 */
	id?: number
	/**
	 * Url where the contributor must be redirected to
	 */
	redirectUrl?: string
}
