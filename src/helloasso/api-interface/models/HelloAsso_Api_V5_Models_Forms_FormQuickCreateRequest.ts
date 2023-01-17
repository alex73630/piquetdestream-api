/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_ContactModel } from "./HelloAsso_Api_V5_Models_Common_ContactModel"
import type { HelloAsso_Api_V5_Models_Common_PlaceModel } from "./HelloAsso_Api_V5_Models_Common_PlaceModel"
import type { HelloAsso_Api_V5_Models_Enums_MembershipValidityType } from "./HelloAsso_Api_V5_Models_Enums_MembershipValidityType"
import type { HelloAsso_Api_V5_Models_Forms_TierLightModel } from "./HelloAsso_Api_V5_Models_Forms_TierLightModel"

export type HelloAsso_Api_V5_Models_Forms_FormQuickCreateRequest = {
	tierList?: Array<HelloAsso_Api_V5_Models_Forms_TierLightModel>
	/**
	 * The banner of the form
	 */
	banner?: string
	/**
	 * The description of form
	 */
	description?: string
	/**
	 * The datetime of the activity end
	 */
	endDate?: string
	/**
	 * The logo of the form
	 */
	logo?: string
	/**
	 * Private Title : displayed only in the organization back office
	 */
	privateTitle?: string
	/**
	 * The datetime of the activity start
	 */
	startDate?: string
	/**
	 * The title of the form. It will be used to generate the url which that can't be changed.
	 */
	title: string
	/**
	 * Activity type identifier, matching one of the provided type values <a href="index#!/Values/Values_Get"> provided here</a>
	 */
	activityTypeId?: number
	/**
	 * The place of the form
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
	 * Membership validity type.
	 */
	validityType?: HelloAsso_Api_V5_Models_Enums_MembershipValidityType
	/**
	 * Whether the user will be allowed to make open donation with an order. The amount of the donation is open, but 3 presets can be set in OpenDonationPresetAmount
	 */
	acceptOpenDonation?: boolean
	/**
	 * allowComment
	 */
	allowComment?: boolean
	/**
	 * amountVisible
	 */
	amountVisible?: boolean
	/**
	 * The color of the form
	 */
	color?: string
	/**
	 * Contact information
	 */
	contact?: HelloAsso_Api_V5_Models_Common_ContactModel
	/**
	 * Display contributor name for fundraiser
	 */
	displayContributorName?: boolean
	/**
	 * Indicates that the members count must be displayed on the form.
	 */
	displayParticipantsCount?: boolean
	/**
	 * Indicates that the remaining entries must be displayed on the form.
	 */
	displayRemainingEntries?: boolean
	/**
	 * Indicates the financial goal (amount of money raised) for the whole form. Null means no goal.
	 */
	financialGoal?: number
	/**
	 * Entrust the issuance of membership cards to HelloAsso (automatically sent by email to participants)
	 */
	generateMembershipCards?: boolean
	/**
	 * Entrust the issuance of tickets to HelloAsso (automatically sent by email to participants)
	 */
	generateTickets?: boolean
	/**
	 * Allows you to add the long description above the store catalog.
	 */
	invertDescriptions?: boolean
	/**
	 * Label conditions and terms file
	 */
	labelConditionsAndTermsFile?: string
	/**
	 * The long description of the form (rich Html)
	 */
	longDescription?: string
	/**
	 * The preset amounts to be shown to the user. Maximum 3 amounts.
	 */
	openDonationPresetAmounts?: Array<number>
	/**
	 * Personalized message for participants
	 */
	personalizedMessage?: string
	/**
	 * The project beneficiaries of the form (rich Html)
	 */
	projectBeneficiaries?: string
	/**
	 * Details of the project expenses (rich Html)
	 */
	projectExpensesDetails?: string
	/**
	 * Description of the project owners (rich Html)
	 */
	projectOwners?: string
	/**
	 * 3 letter country code
	 */
	projectTargetCountry?: string
	/**
	 * Indicates the maximum available entries for the whole form. Null means unlimited entries.
	 */
	maxEntries?: number
}
