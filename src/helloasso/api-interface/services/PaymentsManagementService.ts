/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment } from "../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment"
import type { HelloAsso_Api_V5_Models_Statistics_PaymentDetail } from "../models/HelloAsso_Api_V5_Models_Statistics_PaymentDetail"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class PaymentsManagementService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get detailed information about a specific payment.
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>FormAdmin<br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param paymentId The payment identifier.
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Statistics_PaymentDetail Get payment
	 * @throws ApiError
	 */
	public paymentsGetPayment(
		paymentId: number,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Statistics_PaymentDetail> {
		return this.httpRequest.request({
			method: "GET",
			url: "/payments/{paymentId}",
			path: {
				paymentId: paymentId
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
	 * Get information about payments made in a specific form
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>FormAdmin<br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param organizationSlug The organization slug
	 * @param formSlug The form slug
	 * @param formType The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
	 * @param from First Date Filter
	 * @param to End Date Filter
	 * @param userSearchKey Filter results on user or payer first name, last name or email
	 * @param pageIndex The page of results to retrieve
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param states Filter results by states of payments
	 *
	 * Available values :
	 * * `Pending` - A payment scheduled at a later date, not yet processed.
	 * * `Authorized` - The payment has been authorized, validated, processed.
	 * * `Refused` - The payment has been refused by the bank.
	 * * `Unknown`
	 * * `Registered` - Represents a payment made offline.
	 * Probably for an item of type
	 * * `Refunded` - The payment has been refunded.
	 * * `Refunding` - The payment is being refunded.
	 * * `Contested` - Payment has been contested by the contributor
	 * @param sortOrder Sort payments by ascending or descending order. Default is descending
	 * @param sortField Sort payments by a specific field (Date or UpdateDate). Default is date
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment Get form payments
	 * @throws ApiError
	 */
	public paymentsGetFormPayments(
		organizationSlug: string,
		formSlug: string,
		formType: "CrowdFunding" | "Membership" | "Event" | "Donation" | "PaymentForm" | "Checkout" | "Shop",
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		states?: Array<any>,
		sortOrder: "Asc" | "Desc" = "Desc",
		sortField: "Date" | "UpdateDate" | "CreationDate" = "Date",
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/forms/{formType}/{formSlug}/payments",
			path: {
				organizationSlug: organizationSlug,
				formSlug: formSlug,
				formType: formType
			},
			headers: {
				Authorization: authorization
			},
			query: {
				from: from,
				to: to,
				userSearchKey: userSearchKey,
				pageIndex: pageIndex,
				pageSize: pageSize,
				continuationToken: continuationToken,
				states: states,
				sortOrder: sortOrder,
				sortField: sortField
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * Get information about payments made to a specific organization
	 * Return list of payments according to parameters<br/><br/><b>Your token must have one of these roles : </b><br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param organizationSlug The organization Slug
	 * @param from First Date Filter
	 * @param to End Date Filter
	 * @param userSearchKey Filter results on user or payer first name, last name or email
	 * @param pageIndex The page of results to retrieve
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param states The payment states
	 *
	 * Available values :
	 * * `Pending` - A payment scheduled at a later date, not yet processed.
	 * * `Authorized` - The payment has been authorized, validated, processed.
	 * * `Refused` - The payment has been refused by the bank.
	 * * `Unknown`
	 * * `Registered` - Represents a payment made offline.
	 * Probably for an item of type
	 * * `Refunded` - The payment has been refunded.
	 * * `Refunding` - The payment is being refunded.
	 * * `Contested` - Payment has been contested by the contributor
	 * @param sortOrder Sort payments by ascending or descending order. Default is descending
	 * @param sortField Sort payments by a specific field (Date or UpdateDate). Default is date
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment Get organization payments
	 * @throws ApiError
	 */
	public paymentsGetOrganizationPayments(
		organizationSlug: string = "pour-le-bonheur-d-alexis",
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		states?: Array<any>,
		sortOrder: "Asc" | "Desc" = "Desc",
		sortField: "Date" | "UpdateDate" | "CreationDate" = "Date",
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Payment> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/payments",
			path: {
				organizationSlug: organizationSlug
			},
			headers: {
				Authorization: authorization
			},
			query: {
				from: from,
				to: to,
				userSearchKey: userSearchKey,
				pageIndex: pageIndex,
				pageSize: pageSize,
				continuationToken: continuationToken,
				states: states,
				sortOrder: sortOrder,
				sortField: sortField
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}

	/**
	 * Refund a payment.
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>OrganizationAdmin<br/>FormAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> RefundManagement<br/><br/>
	 * @param paymentId The payment identifier.
	 * @param comment The comment about this refund.
	 * @param refundOrder Whether the order should be refund or not.
	 * @param sendRefundMail Whether a refund mail must be send or not.
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns any OK
	 * @throws ApiError
	 */
	public paymentsRefundPayment(
		paymentId: number,
		comment?: string,
		refundOrder: boolean = false,
		sendRefundMail: boolean = true,
		authorization?: string
	): CancelablePromise<any> {
		return this.httpRequest.request({
			method: "POST",
			url: "/payments/{paymentId}/refund",
			path: {
				paymentId: paymentId
			},
			headers: {
				Authorization: authorization
			},
			query: {
				comment: comment,
				refundOrder: refundOrder,
				sendRefundMail: sendRefundMail
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`
			}
		})
	}
}
