/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_FieldType } from './HelloAsso_Api_V5_Models_Enums_FieldType';

/**
 * Custom field associated with the item or option
 */
export type HelloAsso_Api_V5_Models_Statistics_ItemCustomField = {
	name?: string;
	/**
	 * The type of the field
	 */
	type?: HelloAsso_Api_V5_Models_Enums_FieldType;
	/**
	 * Participant or user answer
	 */
	answer?: string;
};

