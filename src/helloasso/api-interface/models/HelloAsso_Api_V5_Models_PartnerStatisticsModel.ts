/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloAsso_Api_V5_Models_PartnerStatisticsModel = {
	/**
	 * Number of organizations linked to this partner
	 */
	linkedOrganizationsCount?: number;
	/**
	 * Collected amount by linked organizations
	 */
	linkedOrganizationsCollectedAmount?: number;
	/**
	 * Collected amount by All partner checkouts
	 */
	checkoutCollectedAmount?: number;
	/**
	 * Number of organizations using the checkout with this partner
	 */
	organizationsUsingCheckout?: number;
	/**
	 * Number of organizations access token obtains by authorize flow
	 */
	availableOrganizationsAccessTokenCount?: number;
};

