/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_PaginationModel } from "./HelloAsso_Api_V5_Models_Common_PaginationModel"
import type { HelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel } from "./HelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel"

/**
 * ResultsWithPaginationModel class
 */
export type HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel =
	{
		/**
		 * Data property
		 */
		data?: Array<HelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel>
		/**
		 * Pagination info
		 */
		pagination?: HelloAsso_Api_V5_Models_Common_PaginationModel
	}
