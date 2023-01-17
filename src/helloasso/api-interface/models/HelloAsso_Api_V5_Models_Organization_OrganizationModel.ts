/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_OrganizationType } from './HelloAsso_Api_V5_Models_Enums_OrganizationType';
import type { HelloAsso_Models_Enums_GlobalRole } from './HelloAsso_Models_Enums_GlobalRole';
import type { HelloAsso_Models_Shared_GeoLocation } from './HelloAsso_Models_Shared_GeoLocation';

/**
 * OrganizationsModel class
 */
export type HelloAsso_Api_V5_Models_Organization_OrganizationModel = {
	/**
	 * The organization is authenticated. Property returned only when asked by an organization admin.
	 */
	isAuthenticated?: boolean;
	/**
	 * The organization banner
	 */
	banner?: string;
	/**
	 * The organism can issue fiscal receipts (type ok and has not deactivated it)
	 * Must configure it and be authenticated to become enabled
	 */
	fiscalReceiptEligibility?: boolean;
	/**
	 * The organism is eligible, has set up his options, and is authenticated.
	 */
	fiscalReceiptIssuanceEnabled?: boolean;
	/**
	 * The organization type
	 */
	type?: HelloAsso_Api_V5_Models_Enums_OrganizationType;
	/**
	 * Organization category label
	 */
	category?: string;
	/**
	 * Organization Address (for authorized applications or if authorized by the organization)
	 */
	address?: string;
	/**
	 * Organization Geolocation (for authorized applications or if authorized by the organization)
	 */
	geolocation?: HelloAsso_Models_Shared_GeoLocation;
	/**
	 * Logo of organization
	 */
	logo?: string;
	/**
	 * Name of organization
	 */
	name?: string;
	/**
	 * Organization Role
	 */
	role?: HelloAsso_Models_Enums_GlobalRole;
	/**
	 * Organization city
	 */
	city?: string;
	/**
	 * Organization zip code
	 */
	zipCode?: string;
	/**
	 * Organization description
	 */
	description?: string;
	/**
	 * The organization url
	 */
	url?: string;
	/**
	 * The organization slug
	 */
	organizationSlug?: string;
};

