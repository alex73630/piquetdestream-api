/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Account_OrganismCategoryModel } from "../models/HelloAsso_Api_V5_Models_Account_OrganismCategoryModel"
import type { HelloAsso_Api_V5_Models_Tags_PublicTagModel } from "../models/HelloAsso_Api_V5_Models_Tags_PublicTagModel"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class ValuesDefinitionsService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get list of JO categories
	 * Use this in order to build your category list of organization<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Account_OrganismCategoryModel List of organization categories
	 * @throws ApiError
	 */
	public valuesGetCategories(
		authorization?: string
	): CancelablePromise<Array<HelloAsso_Api_V5_Models_Account_OrganismCategoryModel>> {
		return this.httpRequest.request({
			method: "GET",
			url: "/values/organization/categories",
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
	 * Get list of public tags
	 * Use this in order to get list of used tags<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Tags_PublicTagModel List of tags
	 * @throws ApiError
	 */
	public valuesGetPublicTags(
		authorization?: string
	): CancelablePromise<Array<HelloAsso_Api_V5_Models_Tags_PublicTagModel>> {
		return this.httpRequest.request({
			method: "GET",
			url: "/values/tags",
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
