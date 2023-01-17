/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel } from "../models/HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel"
import type { HelloAsso_Api_V5_Models_Accounts_ApiClients_PublicPutPartnerApiClientRequest } from "../models/HelloAsso_Api_V5_Models_Accounts_ApiClients_PublicPutPartnerApiClientRequest"
import type { HelloAsso_Api_V5_Models_ApiNotifications_PostApiUrlNotificationBody } from "../models/HelloAsso_Api_V5_Models_ApiNotifications_PostApiUrlNotificationBody"
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_PartnerOrganizationModel } from "../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_PartnerOrganizationModel"
import type { HelloAsso_Api_V5_Models_Partners_PartnerPublicModel } from "../models/HelloAsso_Api_V5_Models_Partners_PartnerPublicModel"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class PartnerManagementService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * A partner can update his domain
	 * <br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param body
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel Partner api client successfully updated
	 * @throws ApiError
	 */
	public partnersPutPartnerDomain(
		body: HelloAsso_Api_V5_Models_Accounts_ApiClients_PublicPutPartnerApiClientRequest,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Accounts_ApiClients_ApiClientModel> {
		return this.httpRequest.request({
			method: "PUT",
			url: "/partners/me/api-clients",
			headers: {
				Authorization: authorization
			},
			body: body,
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * A partner can update his notification url
	 * <br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param body
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns any Update a Partner notification Url
	 * @throws ApiError
	 */
	public partnersPutPartnerUrlNotification(
		body: HelloAsso_Api_V5_Models_ApiNotifications_PostApiUrlNotificationBody,
		authorization?: string
	): CancelablePromise<any> {
		return this.httpRequest.request({
			method: "PUT",
			url: "/partners/me/api-notifications",
			headers: {
				Authorization: authorization
			},
			body: body,
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * A partner can retrieve his information
	 * <br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Partners_PartnerPublicModel Retrieve requesting partner detail
	 * @throws ApiError
	 */
	public partnersGetPartner(
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Partners_PartnerPublicModel> {
		return this.httpRequest.request({
			method: "GET",
			url: "/partners/me",
			headers: {
				Authorization: authorization
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * Get all organization by partner
	 * List all organization linked to partner.
	 * Results are ordered by Api visibility update date ascending.
	 * The total number of results (or pages) isn't retrievable, so the pagination information returned will always say -1.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_PartnerOrganizationModel Get Organization List
	 * @throws ApiError
	 */
	public partnersGetOrganizations(
		pageSize: number = 20,
		continuationToken?: string,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_PartnerOrganizationModel> {
		return this.httpRequest.request({
			method: "GET",
			url: "/partners/me/organizations",
			headers: {
				Authorization: authorization
			},
			query: {
				pageSize: pageSize,
				continuationToken: continuationToken
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}
}
