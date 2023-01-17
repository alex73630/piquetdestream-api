/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_MetaModel } from "./HelloAsso_Api_V5_Models_Common_MetaModel"
import type { HelloAsso_Api_V5_Models_Enums_FormType } from "./HelloAsso_Api_V5_Models_Enums_FormType"
import type { HelloAsso_Api_V5_Models_Statistics_OrderAmountModel } from "./HelloAsso_Api_V5_Models_Statistics_OrderAmountModel"
import type { HelloAsso_Api_V5_Models_Statistics_OrderItem } from "./HelloAsso_Api_V5_Models_Statistics_OrderItem"
import type { HelloAsso_Api_V5_Models_Statistics_OrderPayment } from "./HelloAsso_Api_V5_Models_Statistics_OrderPayment"
import type { HelloAsso_Api_V5_Models_Statistics_Payer } from "./HelloAsso_Api_V5_Models_Statistics_Payer"

export type HelloAsso_Api_V5_Models_Statistics_OrderDetail = {
	payer?: HelloAsso_Api_V5_Models_Statistics_Payer
	/**
	 * All items of the order
	 */
	items?: Array<HelloAsso_Api_V5_Models_Statistics_OrderItem>
	/**
	 * All payments of the order
	 */
	payments?: Array<HelloAsso_Api_V5_Models_Statistics_OrderPayment>
	/**
	 * Total amount of the order
	 */
	amount?: HelloAsso_Api_V5_Models_Statistics_OrderAmountModel
	/**
	 * The ID of the Order
	 */
	id?: number
	/**
	 * Order creation date
	 */
	date?: string
	/**
	 * FormSlug (lowercase name of the form without special characters)
	 */
	formSlug?: string
	/**
	 * The type of the form
	 */
	formType?: HelloAsso_Api_V5_Models_Enums_FormType
	/**
	 * The organization name.
	 */
	organizationName?: string
	/**
	 * OrganizationSlug (lowercase name of the organization without special characters)
	 */
	organizationSlug?: string
	/**
	 * Checkout intent Id if available
	 */
	checkoutIntentId?: number
	/**
	 * Meta CreatedDate/UpdatedDate
	 */
	meta?: HelloAsso_Api_V5_Models_Common_MetaModel
}
