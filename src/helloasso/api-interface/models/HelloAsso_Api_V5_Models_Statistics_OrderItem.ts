/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_ItemState } from "./HelloAsso_Api_V5_Models_Enums_ItemState"
import type { HelloAsso_Api_V5_Models_Enums_PriceCategory } from "./HelloAsso_Api_V5_Models_Enums_PriceCategory"
import type { HelloAsso_Api_V5_Models_Enums_TierType } from "./HelloAsso_Api_V5_Models_Enums_TierType"
import type { HelloAsso_Api_V5_Models_Statistics_ItemCustomField } from "./HelloAsso_Api_V5_Models_Statistics_ItemCustomField"
import type { HelloAsso_Api_V5_Models_Statistics_ItemDiscount } from "./HelloAsso_Api_V5_Models_Statistics_ItemDiscount"
import type { HelloAsso_Api_V5_Models_Statistics_ItemOption } from "./HelloAsso_Api_V5_Models_Statistics_ItemOption"
import type { HelloAsso_Api_V5_Models_Statistics_SharePayment } from "./HelloAsso_Api_V5_Models_Statistics_SharePayment"
import type { HelloAsso_Api_V5_Models_Statistics_User } from "./HelloAsso_Api_V5_Models_Statistics_User"

/**
 * Item on the order
 */
export type HelloAsso_Api_V5_Models_Statistics_OrderItem = {
	/**
	 * Payments linked to this item and each share between the item and the payment
	 */
	payments?: Array<HelloAsso_Api_V5_Models_Statistics_SharePayment>
	name?: string
	/**
	 * User : participant/member/adherent specified on the item
	 */
	user?: HelloAsso_Api_V5_Models_Statistics_User
	/**
	 * PriceCategory : Free, Fixed or Pay what you want
	 */
	priceCategory?: HelloAsso_Api_V5_Models_Enums_PriceCategory
	/**
	 * Minimum amount that was specified on the tier (in cents)
	 */
	minAmount?: number
	/**
	 * The discount code used on the item
	 */
	discount?: HelloAsso_Api_V5_Models_Statistics_ItemDiscount
	/**
	 * Custom fields related to this item
	 */
	customFields?: Array<HelloAsso_Api_V5_Models_Statistics_ItemCustomField>
	/**
	 * Extra options taken with this item
	 */
	options?: Array<HelloAsso_Api_V5_Models_Statistics_ItemOption>
	/**
	 * The Ticket Url
	 */
	ticketUrl?: string
	/**
	 * The item QrCode (for ticket scanning only)
	 */
	qrCode?: string
	/**
	 * The Membership Card Url
	 */
	membershipCardUrl?: string
	/**
	 * The day of levy for monthly donation only
	 */
	dayOfLevy?: number
	/**
	 * Tier description
	 */
	tierDescription?: string
	/**
	 * ID of the Item
	 */
	id?: number
	/**
	 * Total item Price in cents (after discount without extra options)
	 */
	amount?: number
	/**
	 * Type of the used tariff
	 */
	type?: HelloAsso_Api_V5_Models_Enums_TierType
	/**
	 * The raw amount (without reduction)
	 */
	initialAmount?: number
	/**
	 * State of this item
	 */
	state?: HelloAsso_Api_V5_Models_Enums_ItemState
}
