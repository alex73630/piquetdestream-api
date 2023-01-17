/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item } from '../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item';
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order } from '../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order';
import type { HelloAsso_Api_V5_Models_Statistics_ItemDetail } from '../models/HelloAsso_Api_V5_Models_Statistics_ItemDetail';
import type { HelloAsso_Api_V5_Models_Statistics_OrderDetail } from '../models/HelloAsso_Api_V5_Models_Statistics_OrderDetail';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrdersItemsService {

	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get the detail of an item contained in an order
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>FormAdmin<br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param itemId The item ID
	 * @param withDetails Set to true to return CustomFields and Options
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Statistics_ItemDetail Get order item
	 * @throws ApiError
	 */
	public ordersGetItem(
		itemId: number,
		withDetails: boolean = false,
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Statistics_ItemDetail> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/items/{itemId}',
			path: {
				'itemId': itemId,
			},
			headers: {
				'Authorization': authorization,
			},
			query: {
				'withDetails': withDetails,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get a list of items “sold” in a form
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
	 * @param tierTypes The type of tiers
	 * @param itemStates The item states
	 *
	 * Available values :
	 * * `Processed` - The item is paid and is valid
	 * * `Registered` - The item has been registered manually by the organization and is valid
	 * * `Unknown`
	 * * `Canceled` - The item has been canceled, and is no longer valid
	 * @param tierName The name of a tier
	 * @param withDetails Set to true to return CustomFields and Options
	 * @param sortOrder Sort forms items by ascending or descending order. Default is descending
	 * @param sortField Sort forms items by a specific field (Date or UpdateDate). Default is date
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item Get form order items
	 * @throws ApiError
	 */
	public ordersGetFormItems(
		organizationSlug: string,
		formSlug: string,
		formType: 'CrowdFunding' | 'Membership' | 'Event' | 'Donation' | 'PaymentForm' | 'Checkout' | 'Shop',
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		tierTypes?: Array<any>,
		itemStates?: Array<any>,
		tierName?: string,
		withDetails: boolean = false,
		sortOrder: 'Asc' | 'Desc' = 'Desc',
		sortField: 'Date' | 'UpdateDate' | 'CreationDate' = 'Date',
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/organizations/{organizationSlug}/forms/{formType}/{formSlug}/items',
			path: {
				'organizationSlug': organizationSlug,
				'formSlug': formSlug,
				'formType': formType,
			},
			headers: {
				'Authorization': authorization,
			},
			query: {
				'from': from,
				'to': to,
				'userSearchKey': userSearchKey,
				'pageIndex': pageIndex,
				'pageSize': pageSize,
				'continuationToken': continuationToken,
				'tierTypes': tierTypes,
				'itemStates': itemStates,
				'tierName': tierName,
				'withDetails': withDetails,
				'sortOrder': sortOrder,
				'sortField': sortField,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get a list of items sold by an organization
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param organizationSlug The organization slug
	 * @param from First Date Filter
	 * @param to End Date Filter
	 * @param userSearchKey Filter results on user or payer first name, last name or email
	 * @param pageIndex The page of results to retrieve
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param tierTypes The type of tiers Donation, Payment, Registration, Membership, MonthlyDonation, MonthlyPayment, OfflineDonation, Contribution, Bonus
	 * @param itemStates The item states
	 *
	 * Available values :
	 * * `Processed` - The item is paid and is valid
	 * * `Registered` - The item has been registered manually by the organization and is valid
	 * * `Unknown`
	 * * `Canceled` - The item has been canceled, and is no longer valid
	 * @param tierName The name of a tier
	 * @param withDetails Set to true to return CustomFields and Options
	 * @param sortOrder Sort organizations items by ascending or descending order. Default is descending
	 * @param sortField Sort organizations items by a specific field (Date or UpdateDate). Default is date
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item Get organization order items
	 * @throws ApiError
	 */
	public ordersGetOrganizationItems(
		organizationSlug: string,
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		tierTypes?: Array<any>,
		itemStates?: Array<any>,
		tierName?: string,
		withDetails: boolean = false,
		sortOrder: 'Asc' | 'Desc' = 'Desc',
		sortField: 'Date' | 'UpdateDate' | 'CreationDate' = 'Date',
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Item> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/organizations/{organizationSlug}/items',
			path: {
				'organizationSlug': organizationSlug,
			},
			headers: {
				'Authorization': authorization,
			},
			query: {
				'from': from,
				'to': to,
				'userSearchKey': userSearchKey,
				'pageIndex': pageIndex,
				'pageSize': pageSize,
				'continuationToken': continuationToken,
				'tierTypes': tierTypes,
				'itemStates': itemStates,
				'tierName': tierName,
				'withDetails': withDetails,
				'sortOrder': sortOrder,
				'sortField': sortField,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get detailed information about a specific order
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>FormAdmin<br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param orderId
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Statistics_OrderDetail Get order
	 * @throws ApiError
	 */
	public ordersGetOrder(
		orderId: number,
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Statistics_OrderDetail> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/orders/{orderId}',
			path: {
				'orderId': orderId,
			},
			headers: {
				'Authorization': authorization,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get form orders
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
	 * @param withDetails Set to true to return CustomFields
	 * @param sortOrder Sort forms orders by ascending or descending order. Default is descending
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order Get form orders
	 * @throws ApiError
	 */
	public ordersGetFormOrders(
		organizationSlug: string,
		formSlug: string,
		formType: 'CrowdFunding' | 'Membership' | 'Event' | 'Donation' | 'PaymentForm' | 'Checkout' | 'Shop',
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		withDetails: boolean = false,
		sortOrder: 'Asc' | 'Desc' = 'Desc',
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/organizations/{organizationSlug}/forms/{formType}/{formSlug}/orders',
			path: {
				'organizationSlug': organizationSlug,
				'formSlug': formSlug,
				'formType': formType,
			},
			headers: {
				'Authorization': authorization,
			},
			query: {
				'from': from,
				'to': to,
				'userSearchKey': userSearchKey,
				'pageIndex': pageIndex,
				'pageSize': pageSize,
				'continuationToken': continuationToken,
				'withDetails': withDetails,
				'sortOrder': sortOrder,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get a list of orders within a specific organization
	 * <br/><br/><b>Your token must have one of these roles : </b><br/>OrganizationAdmin<br/><br/>If you are an <b>association</b>, you can obtain these roles with your client.<br/>If you are a <b>partner</b>, you can obtain these roles by the authorize flow.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> AccessTransactions<br/><br/>
	 * @param organizationSlug The organization slug
	 * @param from First Date Filter
	 * @param to End Date Filter
	 * @param userSearchKey Filter results on user or payer first name, last name or email
	 * @param pageIndex The page of results to retrieve
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param formTypes The type of the form CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
	 * @param withDetails Set to true to return CustomFields
	 * @param sortOrder Sort organizations orders by ascending or descending order. Default is descending
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order Get organization orders
	 * @throws ApiError
	 */
	public ordersGetOrganizationOrders(
		organizationSlug: string,
		from?: string,
		to?: string,
		userSearchKey?: string,
		pageIndex: number = 1,
		pageSize: number = 20,
		continuationToken?: string,
		formTypes?: Array<any>,
		withDetails: boolean = false,
		sortOrder: 'Asc' | 'Desc' = 'Desc',
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Statistics_Order> {
		return this.httpRequest.request({
			method: 'GET',
			url: '/organizations/{organizationSlug}/orders',
			path: {
				'organizationSlug': organizationSlug,
			},
			headers: {
				'Authorization': authorization,
			},
			query: {
				'from': from,
				'to': to,
				'userSearchKey': userSearchKey,
				'pageIndex': pageIndex,
				'pageSize': pageSize,
				'continuationToken': continuationToken,
				'formTypes': formTypes,
				'withDetails': withDetails,
				'sortOrder': sortOrder,
			},
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

}
