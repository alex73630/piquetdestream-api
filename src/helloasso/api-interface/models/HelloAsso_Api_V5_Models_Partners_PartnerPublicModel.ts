/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel } from './HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel';
import type { HelloAsso_Api_V5_Models_ApiNotifications_ApiUrlNotificationModel } from './HelloAsso_Api_V5_Models_ApiNotifications_ApiUrlNotificationModel';
import type { HelloAsso_Api_V5_Models_PartnerStatisticsModel } from './HelloAsso_Api_V5_Models_PartnerStatisticsModel';

export type HelloAsso_Api_V5_Models_Partners_PartnerPublicModel = {
	/**
	 * Name of the partner
	 */
	name?: string;
	/**
	 * Description of the partner
	 */
	description?: string;
	/**
	 * Website of the partner
	 */
	url?: string;
	/**
	 * Logo of the partner
	 */
	logo?: string;
	/**
	 * ApiClient of the partner
	 */
	client?: HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel;
	/**
	 * Url Notification of the partner
	 */
	urlNotificationList?: Array<HelloAsso_Api_V5_Models_ApiNotifications_ApiUrlNotificationModel>;
	/**
	 * Statistics of the partner
	 */
	partnerStatistics?: HelloAsso_Api_V5_Models_PartnerStatisticsModel;
};

