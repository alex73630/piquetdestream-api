/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Carts_CheckoutIntentResponse } from "../models/HelloAsso_Api_V5_Models_Carts_CheckoutIntentResponse"
import type { HelloAsso_Api_V5_Models_Carts_InitCheckoutBody } from "../models/HelloAsso_Api_V5_Models_Carts_InitCheckoutBody"
import type { HelloAsso_Api_V5_Models_Carts_InitCheckoutResponse } from "../models/HelloAsso_Api_V5_Models_Carts_InitCheckoutResponse"

import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class CheckoutIntentsManagementService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Retrieve a checkout intent, with the order if the payment has been authorized.
	 * <br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> Checkout<br/><br/>
	 * @param organizationSlug
	 * @param checkoutIntentId
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Carts_CheckoutIntentResponse Checkout intent found
	 * @throws ApiError
	 */
	public organizationCheckoutIntentsGetCheckoutIntent(
		organizationSlug: string,
		checkoutIntentId: number,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Carts_CheckoutIntentResponse> {
		return this.httpRequest.request({
			method: "GET",
			url: "/organizations/{organizationSlug}/checkout-intents/{checkoutIntentId}",
			path: {
				organizationSlug: organizationSlug,
				checkoutIntentId: checkoutIntentId
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
	 * Init a checkout.
	 * <br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> Checkout<br/><br/>
	 * @param organizationSlug
	 * @param body
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Carts_InitCheckoutResponse Checkout intent initiated successfully
	 * @throws ApiError
	 */
	public organizationCheckoutIntentsPostInitCheckout(
		organizationSlug: string,
		body: HelloAsso_Api_V5_Models_Carts_InitCheckoutBody,
		authorization?: string
	): CancelablePromise<HelloAsso_Api_V5_Models_Carts_InitCheckoutResponse> {
		return this.httpRequest.request({
			method: "POST",
			url: "/organizations/{organizationSlug}/checkout-intents",
			path: {
				organizationSlug: organizationSlug
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
