/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_RecordActionType } from './HelloAsso_Api_V5_Models_Enums_RecordActionType';
import type { HelloAsso_Api_V5_Models_Organization_OrganizationBasicModel } from './HelloAsso_Api_V5_Models_Organization_OrganizationBasicModel';

/**
 * SynchronizableOrganizationModel class
 */
export type HelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel = {
	/**
	 * Record Action Type : Delete or Insert
	 */
	action?: HelloAsso_Api_V5_Models_Enums_RecordActionType;
	/**
	 * Organization to synchronise : is either a {HelloAsso.Api.V5.Models.Organization.OrganizationBasicModel} if action is Delete, or a {HelloAsso.Api.V5.Models.Directory.DirectoryOrganizationPublicModel}
	 */
	record?: HelloAsso_Api_V5_Models_Organization_OrganizationBasicModel;
};

