/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Organization_OrganizationLightModel } from "../models/HelloAsso_Api_V5_Models_Organization_OrganizationLightModel"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class UsersService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get my organizations
	 * Returns the list of organizations where the connected user has rights ( Form or Organization itself )<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Organization_OrganizationLightModel Get organizations for user
	 * @throws ApiError
	 */
	public usersGetOrganizations(
		authorization?: string
	): CancelablePromise<Array<HelloAsso_Api_V5_Models_Organization_OrganizationLightModel>> {
		return this.httpRequest.request({
			method: "GET",
			url: "/users/me/organizations",
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
