/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Forms_FormLightModel } from "../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Forms_FormLightModel"
import type { HelloAsso_Api_V5_Models_Enums_FormType } from "../models/HelloAsso_Api_V5_Models_Enums_FormType"
import type { HelloAsso_Api_V5_Models_Forms_FormPublicModel } from "../models/HelloAsso_Api_V5_Models_Forms_FormPublicModel"
import type { HelloAsso_Api_V5_Models_Forms_FormQuickCreateModel } from "../models/HelloAsso_Api_V5_Models_Forms_FormQuickCreateModel"
import type { HelloAsso_Api_V5_Models_Forms_FormQuickCreateRequest } from "../models/HelloAsso_Api_V5_Models_Forms_FormQuickCreateRequest"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class FormsService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get detailed public data about a specific form
	 * This api allows you to retrieve all public information of a form whether it is Crowdfunding, Membership, Event, Donation...<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param organizationSlug
	 * @param formType
	 * @param formSlug
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Forms_FormPublicModel Get a Form
	 * @throws ApiError
	 */
	public publicFormsGetFormPublic(
		organizationSlug: string = "assoaha",
		formType: "CrowdFunding" | "Membership" | "Event" | "Donation" | "PaymentForm" | "Checkout" | "Shop" = "Event",
		formSlug: string = "ma-billetterie",
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Forms_FormPublicModel> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/forms/{formType}/{formSlug}/public",
			path: {
				organizationSlug: organizationSlug,
				formType: formType,
				formSlug: formSlug
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

	/**
	 * Get a list of formTypes for an organization
	 * List all the formTypes where the organization has at least one form. This also can be filtered by states.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param organizationSlug The organization Slug
	 * @param states List of Form States to filter with. If none specified, it won't filter results.
	 *
	 * Available values :
	 * * `Public` - The form is publicly visible and findable on search engines
	 * * `Private` - The form is visible only with the URL, you cannot find it on search engines
	 * * `Draft` - The form is not yet published but visible if you have admin rights
	 * * `Disabled` - The form is disabled and can be reenabled by changing state to public or private
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Enums_FormType Get form types created by the organization
	 * @throws ApiError
	 */
	public publicFormsGetFormTypesList(
		organizationSlug: string = "pour-le-bonheur-d-alexis",
		states?: Array<any>,
		authorization?: string
	): CancelablePromise<Array<HelloAsso_Api_V5_Models_Enums_FormType>> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/formTypes",
			path: {
				organizationSlug: organizationSlug
			},
			headers: {
				Authorization: authorization
			},
			query: {
				states: states
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * Get the forms of a specific organization
	 * List all forms matching the filtered states and types.
	 * If filters are left empty, no filter is applied.
	 * Results are ordered by creation date descending.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessPublicData<br/><br/>
	 * @param organizationSlug The organization Slug
	 * @param states States to filter
	 *
	 * Available values :
	 * * `Public` - The form is publicly visible and findable on search engines
	 * * `Private` - The form is visible only with the URL, you cannot find it on search engines
	 * * `Draft` - The form is not yet published but visible if you have admin rights
	 * * `Disabled` - The form is disabled and can be reenabled by changing state to public or private
	 * @param formTypes Types to filter
	 * @param pageIndex The page of results to retrieve
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Forms_FormLightModel Get Form List
	 * @throws ApiError
	 */
	public publicFormsGetFormListByOrganization(
		organizationSlug: string = "pour-le-bonheur-d-alexis",
		states?: Array<any>,
		formTypes?: Array<any>,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Forms_FormLightModel> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/forms",
			path: {
				organizationSlug: organizationSlug
			},
			headers: {
				Authorization: authorization
			},
			query: {
				states: states,
				formTypes: formTypes,
				pageIndex: pageIndex,
				pageSize: pageSize,
				continuationToken: continuationToken
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * Create a simplified event for an Organism
	 * This is a limited service to create an event with only limited information and few simple pricing.
	 * Event created this way can be further edited with other services<br/><br/><b>Your token must have one of these roles : </b><br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> FormAdmin<br/><br/>
	 * @param formType The form type to create - only Event type is supported
	 * @param body The body of the request.
	 * @param organizationSlug The organization Slug
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Forms_FormQuickCreateModel Event Successfully created
	 * @throws ApiError
	 */
	public formAdministrationPostQuickCreateEvent(
		formType: "CrowdFunding" | "Membership" | "Event" | "Donation" | "PaymentForm" | "Checkout" | "Shop",
		body: HelloAsso_Api_V5_Models_Forms_FormQuickCreateRequest,
		organizationSlug: string = "assoaha",
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Forms_FormQuickCreateModel> {
		return this.httpRequest.request({
			method: "POST",
			url: "/organizations/{organizationSlug}/forms/{formType}/action/quick-create",
			path: {
				organizationSlug: organizationSlug,
				formType: formType
			},
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
}
