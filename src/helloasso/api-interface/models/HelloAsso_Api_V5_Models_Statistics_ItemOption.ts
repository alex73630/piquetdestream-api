/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_PriceCategory } from './HelloAsso_Api_V5_Models_Enums_PriceCategory';
import type { HelloAsso_Api_V5_Models_Statistics_ItemCustomField } from './HelloAsso_Api_V5_Models_Statistics_ItemCustomField';

/**
 * ItemOption class
 */
export type HelloAsso_Api_V5_Models_Statistics_ItemOption = {
	/**
	 * Name of the option
	 */
	name?: string;
	/**
	 * Amount of the option in cents
	 */
	amount?: number;
	priceCategory?: HelloAsso_Api_V5_Models_Enums_PriceCategory;
	/**
	 * Option is required or optional
	 */
	isRequired?: boolean;
	/**
	 * Custom fields related to this option
	 */
	customFields?: Array<HelloAsso_Api_V5_Models_Statistics_ItemCustomField>;
};

