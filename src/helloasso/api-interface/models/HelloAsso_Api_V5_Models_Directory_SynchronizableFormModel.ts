/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_RecordActionType } from "./HelloAsso_Api_V5_Models_Enums_RecordActionType"
import type { HelloAsso_Api_V5_Models_Forms_FormBasicModel } from "./HelloAsso_Api_V5_Models_Forms_FormBasicModel"

/**
 * SynchronizableFormModel class
 */
export type HelloAsso_Api_V5_Models_Directory_SynchronizableFormModel = {
	/**
	 * Record Action Type : Delete or Insert
	 */
	action?: HelloAsso_Api_V5_Models_Enums_RecordActionType
	/**
	 * Form to synchronise : is either a {HelloAsso.Api.V5.Models.Forms.FormBasicModel} if action is Delete, or a {HelloAsso.Api.V5.Models.Forms.FormPublicModel}
	 */
	record?: HelloAsso_Api_V5_Models_Forms_FormBasicModel
}
