/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_DocumentModel } from './HelloAsso_Api_V5_Models_Common_DocumentModel';
import type { HelloAsso_Api_V5_Models_Common_MetaModel } from './HelloAsso_Api_V5_Models_Common_MetaModel';
import type { HelloAsso_Api_V5_Models_Enums_FormState } from './HelloAsso_Api_V5_Models_Enums_FormState';
import type { HelloAsso_Api_V5_Models_Enums_FormType } from './HelloAsso_Api_V5_Models_Enums_FormType';

/**
 * FormLightModel class
 */
export type HelloAsso_Api_V5_Models_Forms_FormLightModel = {
	/**
	 * Banner
	 */
	banner?: HelloAsso_Api_V5_Models_Common_DocumentModel;
	/**
	 * Currency
	 */
	currency?: string;
	/**
	 * Short description (one line)
	 */
	description?: string;
	/**
	 * The datetime of the activity start
	 */
	startDate?: string;
	/**
	 * The datetime of the activity end
	 */
	endDate?: string;
	/**
	 * Logo
	 */
	logo?: HelloAsso_Api_V5_Models_Common_DocumentModel;
	/**
	 * Meta
	 */
	meta?: HelloAsso_Api_V5_Models_Common_MetaModel;
	/**
	 * State
	 */
	state?: HelloAsso_Api_V5_Models_Enums_FormState;
	/**
	 * Title
	 */
	title?: string;
	/**
	 * Private Title
	 */
	privateTitle?: string;
	/**
	 * Url of the widget button
	 */
	widgetButtonUrl?: string;
	/**
	 * Url of the form widget
	 */
	widgetFullUrl?: string;
	/**
	 * Url of the horizontal vignette widget
	 */
	widgetVignetteHorizontalUrl?: string;
	/**
	 * Url of the vertical vignette widget
	 */
	widgetVignetteVerticalUrl?: string;
	/**
	 * Url of the counter widget
	 */
	widgetCounterUrl?: string;
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

