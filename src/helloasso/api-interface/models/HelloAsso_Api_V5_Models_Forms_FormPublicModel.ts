/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_DocumentModel } from "./HelloAsso_Api_V5_Models_Common_DocumentModel"
import type { HelloAsso_Api_V5_Models_Common_MetaModel } from "./HelloAsso_Api_V5_Models_Common_MetaModel"
import type { HelloAsso_Api_V5_Models_Common_PlaceModel } from "./HelloAsso_Api_V5_Models_Common_PlaceModel"
import type { HelloAsso_Api_V5_Models_Enums_FormState } from "./HelloAsso_Api_V5_Models_Enums_FormState"
import type { HelloAsso_Api_V5_Models_Enums_FormType } from "./HelloAsso_Api_V5_Models_Enums_FormType"
import type { HelloAsso_Api_V5_Models_Enums_MembershipValidityType } from "./HelloAsso_Api_V5_Models_Enums_MembershipValidityType"
import type { HelloAsso_Api_V5_Models_Forms_TierPublicModel } from "./HelloAsso_Api_V5_Models_Forms_TierPublicModel"

/**
 * FormPublicModel class
 */
export type HelloAsso_Api_V5_Models_Forms_FormPublicModel = {
	/**
	 * Organization Logo
	 */
	organizationLogo?: string
	/**
	 * Organization Name
	 */
	organizationName?: string
	/**
	 * Tiers
	 */
	tiers?: Array<HelloAsso_Api_V5_Models_Forms_TierPublicModel>
	/**
	 * Activity type of the event eg. "Atelier(s) / Stage(s)" matching one of the provided type values <a href="index#!/Values/Values_Get"> provided here</a> or a custom value is allowed.
	 */
	activityType?: string
	/**
	 * Activity type identifier
	 */
	activityTypeId?: number
	/**
	 * Place
	 */
	place?: HelloAsso_Api_V5_Models_Common_PlaceModel
	/**
	 * The datetime (Inclusive) at which the sales end.
	 * If null the orders will be available until the end of the campaign.
	 */
	saleEndDate?: string
	/**
	 * The datetime (Inclusive) at which the users can start placing orders.
	 * If null the orders will be available as soon as the campaign is published.
	 */
	saleStartDate?: string
	/**
	 * Validity Type : until when the membership is valid (if applicable)
	 */
	validityType?: HelloAsso_Api_V5_Models_Enums_MembershipValidityType
	/**
	 * Banner
	 */
	banner?: HelloAsso_Api_V5_Models_Common_DocumentModel
	/**
	 * Currency
	 */
	currency?: string
	/**
	 * Short description (one line)
	 */
	description?: string
	/**
	 * The datetime of the activity start
	 */
	startDate?: string
	/**
	 * The datetime of the activity end
	 */
	endDate?: string
	/**
	 * Logo
	 */
	logo?: HelloAsso_Api_V5_Models_Common_DocumentModel
	/**
	 * Meta
	 */
	meta?: HelloAsso_Api_V5_Models_Common_MetaModel
	/**
	 * State
	 */
	state?: HelloAsso_Api_V5_Models_Enums_FormState
	/**
	 * Title
	 */
	title?: string
	/**
	 * Private Title
	 */
	privateTitle?: string
	/**
	 * Url of the widget button
	 */
	widgetButtonUrl?: string
	/**
	 * Url of the form widget
	 */
	widgetFullUrl?: string
	/**
	 * Url of the horizontal vignette widget
	 */
	widgetVignetteHorizontalUrl?: string
	/**
	 * Url of the vertical vignette widget
	 */
	widgetVignetteVerticalUrl?: string
	/**
	 * Url of the counter widget
	 */
	widgetCounterUrl?: string
	/**
	 * The form slug
	 */
	formSlug?: string
	/**
	 * The form type
	 */
	formType?: HelloAsso_Api_V5_Models_Enums_FormType
	/**
	 * The form url
	 */
	url?: string
	/**
	 * The organization slug
	 */
	organizationSlug?: string
}
