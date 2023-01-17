/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloAsso_Api_V5_Models_Directory_ListOrganizationsRequest = {
	/**
	 * Textual search for organization name
	 */
	name?: string;
	/**
	 * Textual search for organization description
	 */
	description?: string;
	/**
	 * The categories of the organizations
	 */
	categories?: Array<string>;
	/**
	 * The organization types
	 */
	types?: Array<string>;
	/**
	 * The zip codes where the organizations are located
	 */
	zipCodes?: Array<string>;
	/**
	 * The cities where the organizations are located
	 */
	cities?: Array<string>;
	/**
	 * The regions where the organizations are located
	 */
	regions?: Array<string>;
	/**
	 * The departments where the organizations are located
	 */
	departments?: Array<string>;
	/**
	 * Allow only organization with a fiscal receipt eligibility
	 */
	fiscalReceiptEligibility?: boolean;
	/**
	 * Allow only Organization with internal tags
	 * this filter is for special operations only
	 */
	internalTags?: Array<string>;
	/**
	 * Allow only Organization with public tags
	 */
	tags?: Array<string>;
	/**
	 * Allow only Organization with linked partners
	 */
	linkedPartners?: Array<string>;
};

