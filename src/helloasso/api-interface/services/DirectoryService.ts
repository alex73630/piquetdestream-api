/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableFormModel } from '../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableFormModel';
import type { HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel } from '../models/HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel';
import type { HelloAsso_Api_V5_Models_Directory_ListFormsRequest } from '../models/HelloAsso_Api_V5_Models_Directory_ListFormsRequest';
import type { HelloAsso_Api_V5_Models_Directory_ListOrganizationsRequest } from '../models/HelloAsso_Api_V5_Models_Directory_ListOrganizationsRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectoryService {

	constructor(public readonly httpRequest: BaseHttpRequest) {}

	/**
	 * Get all forms by form filters and organization filters
	 * List all forms matching all the filters.
	 * If filters are left empty, no filter is applied.
	 * Results are ordered by Api visibility update date ascending.
	 * The total number of results (or pages) isn't retrievable, so the pagination information returned will always say -1.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> FormOpenDirectory<br/><br/>
	 * @param body Body which contains the filters to apply
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableFormModel Get Form List
	 * @throws ApiError
	 */
	public directoryPostFormsListRequest(
		body: HelloAsso_Api_V5_Models_Directory_ListFormsRequest,
		pageSize: number = 20,
		continuationToken?: string,
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableFormModel> {
		return this.httpRequest.request({
			method: 'POST',
			url: '/directory/forms',
			headers: {
				'Authorization': authorization,
			},
			query: {
				'pageSize': pageSize,
				'continuationToken': continuationToken,
			},
			body: body,
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

	/**
	 * Get all organization by organization filters
	 * List all organization matching all the filters.
	 * If filters are left empty, no filter is applied.
	 * Results are ordered by Api visibility update date ascending.
	 * The total number of results (or pages) isn't retrievable, so the pagination information returned will always say -1.<br/><br/><b>Your clientId must be allowed all of those privileges : </b> <br/> OrganizationOpenDirectory<br/><br/>
	 * @param body Body which contains the filters to apply
	 * @param pageSize The number of items per page
	 * @param continuationToken Continuation Token from which we wish to retrieve results
	 * @param authorization You can override the JWT used fo authorization here. ie : Bearer JWT_TOKEN
	 * @returns HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel Get Organization List
	 * @throws ApiError
	 */
	public directoryPostOrganizationsListRequest(
		body: HelloAsso_Api_V5_Models_Directory_ListOrganizationsRequest,
		pageSize: number = 20,
		continuationToken?: string,
		authorization?: string,
	): CancelablePromise<HelloAsso_Api_V5_Models_Common_ResultsWithPaginationModelOfHelloAsso_Api_V5_Models_Directory_SynchronizableOrganizationModel> {
		return this.httpRequest.request({
			method: 'POST',
			url: '/directory/organizations',
			headers: {
				'Authorization': authorization,
			},
			query: {
				'pageSize': pageSize,
				'continuationToken': continuationToken,
			},
			body: body,
			errors: {
				401: `Unauthorized, you must add a valid JWT into Authorization Header with the format : \`Bearer TOKEN\``,
				403: `The JWT token hasn't the privileges or Roles for this action`,
			},
		});
	}

}
