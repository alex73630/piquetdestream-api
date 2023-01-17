/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_DocumentModel } from "./HelloAsso_Api_V5_Models_Common_DocumentModel"
import type { HelloAsso_Api_V5_Models_Common_MetaModel } from "./HelloAsso_Api_V5_Models_Common_MetaModel"
import type { HelloAsso_Api_V5_Models_Enums_PaymentFrequencyType } from "./HelloAsso_Api_V5_Models_Enums_PaymentFrequencyType"
import type { HelloAsso_Api_V5_Models_Enums_TierType } from "./HelloAsso_Api_V5_Models_Enums_TierType"
import type { HelloAsso_Api_V5_Models_Forms_TermModel } from "./HelloAsso_Api_V5_Models_Forms_TermModel"

/**
 * TierPublicModel class
 */
export type HelloAsso_Api_V5_Models_Forms_TierPublicModel = {
	/**
	 * id
	 */
	id?: number
	/**
	 * label
	 */
	label?: string
	/**
	 * description
	 */
	description?: string
	/**
	 * tierType
	 */
	tierType?: HelloAsso_Api_V5_Models_Enums_TierType
	/**
	 * the Price in cents
	 * if price equals 0 then it is free or there is a MinAmount
	 */
	price?: number
	/**
	 * Vat rate if applicable
	 * Amount have to be 0.10 for 10%
	 */
	vatRate?: number
	/**
	 * If set, it means the payment is free to choose, according to the specified minAmount in cents
	 */
	minAmount?: number
	/**
	 * Type of payment frequency
	 */
	paymentFrequency?: HelloAsso_Api_V5_Models_Enums_PaymentFrequencyType
	/**
	 * Max quantity buyable in this cart
	 */
	maxPerUser?: number
	/**
	 * meta
	 */
	meta?: HelloAsso_Api_V5_Models_Common_MetaModel
	/**
	 * The datetime (Inclusive) at which the users can start buying this tier.
	 * If null the tier will be available at the start of the event.
	 */
	saleStartDate?: string
	/**
	 * The datetime (Inclusive) at which the tier is no longer available.
	 * If null the tier will be available until the end of the event.
	 */
	saleEndDate?: string
	/**
	 * Whether this is eligible to a deduction
	 */
	isEligibleTaxReceipt?: boolean
	/**
	 * Terms of tier
	 */
	terms?: Array<HelloAsso_Api_V5_Models_Forms_TermModel>
	/**
	 * Picture, used only for Shop Form
	 */
	picture?: HelloAsso_Api_V5_Models_Common_DocumentModel
}
