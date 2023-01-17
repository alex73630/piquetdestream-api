/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_ItemState } from './HelloAsso_Api_V5_Models_Enums_ItemState';
import type { HelloAsso_Api_V5_Models_Enums_TierType } from './HelloAsso_Api_V5_Models_Enums_TierType';

/**
 * Item linked to a payment
 */
export type HelloAsso_Api_V5_Models_Statistics_PaymentItem = {
	/**
	 * Amount of the payment assigned to the item and its options (in cents)
	 */
	shareAmount?: number;
	/**
	 * Amount of the item payed on this payment term (in cents)
	 */
	shareItemAmount?: number;
	/**
	 * Amount of all extra options linked to this item and payed on this payment (in cents)
	 */
	shareOptionsAmount?: number;
	/**
	 * ID of the Item
	 */
	id?: number;
	/**
	 * Total item Price in cents (after discount without extra options)
	 */
	amount?: number;
	/**
	 * Type of the used tariff
	 */
	type?: HelloAsso_Api_V5_Models_Enums_TierType;
	/**
	 * The raw amount (without reduction)
	 */
	initialAmount?: number;
	/**
	 * State of this item
	 */
	state?: HelloAsso_Api_V5_Models_Enums_ItemState;
};

