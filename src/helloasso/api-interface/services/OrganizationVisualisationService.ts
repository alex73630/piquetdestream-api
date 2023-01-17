/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Organization_OrganizationModel } from "../models/HelloAsso_Api_V5_Models_Organization_OrganizationModel"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class OrganizationVisualisationService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get Organization details
	 * Get the public information of the specified organization.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param organizationSlug The organization Slug
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Organization_OrganizationModel Get Organization by slug
	 * @throws ApiError
	 */
	public organizationsGetOrganization(
		organizationSlug: string = "pour-le-bonheur-d-alexis",
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Organization_OrganizationModel> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}",
			path: {
				organizationSlug: organizationSlug
			},
			headers: {
				Authorization: authorization
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}
}
