/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel = {
	readonly id?: string;
	/**
	 * Filled only when requested by the organization back office
	 */
	readonly secret?: string;
	readonly partnerName?: string;
	readonly privileges?: Array<string>;
	readonly domain?: string;
};

