/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloAsso_Api_V5_Models_Statistics_ShareItem = {
	/**
	 * Id of the order item
	 */
	id?: number;
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
};

