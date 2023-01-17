/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_FormType } from './HelloAsso_Api_V5_Models_Enums_FormType';

/**
 * A basic form model
 */
export type HelloAsso_Api_V5_Models_Forms_FormBasicModel = {
	/**
	 * The form slug
	 */
	formSlug?: string;
	/**
	 * The form type
	 */
	formType?: HelloAsso_Api_V5_Models_Enums_FormType;
	/**
	 * The form url
	 */
	url?: string;
	/**
	 * The organization slug
	 */
	organizationSlug?: string;
};

