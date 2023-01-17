/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Models_Enums_GlobalRole } from "./HelloAsso_Models_Enums_GlobalRole"

/**
 * OrganizationLightModel class
 */
export type HelloAsso_Api_V5_Models_Organization_OrganizationLightModel = {
	/**
	 * Logo of organization
	 */
	logo?: string
	/**
	 * Name of organization
	 */
	name?: string
	/**
	 * Organization Role
	 */
	role?: HelloAsso_Models_Enums_GlobalRole
	/**
	 * Organization city
	 */
	city?: string
	/**
	 * Organization zip code
	 */
	zipCode?: string
	/**
	 * Organization description
	 */
	description?: string
	/**
	 * The organization url
	 */
	url?: string
	/**
	 * The organization slug
	 */
	organizationSlug?: string
}
