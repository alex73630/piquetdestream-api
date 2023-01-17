/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Directory_DirectoryOrganizationPublicModel } from './HelloAsso_Api_V5_Models_Directory_DirectoryOrganizationPublicModel';

/**
 * DirectoryOrganizationPublicModel class
 */
export type HelloAsso_Api_V5_Models_Directory_PartnerOrganizationModel = {
	/**
	 * Organization linked to partner
	 */
	organization?: HelloAsso_Api_V5_Models_Directory_DirectoryOrganizationPublicModel;
	/**
	 * True if exist a valid organization access token obtained by authorize flow
	 */
	availableAccessToken?: boolean;
};

