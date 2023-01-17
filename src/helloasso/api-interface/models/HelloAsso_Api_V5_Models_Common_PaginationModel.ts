/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pagination model class
 */
export type HelloAsso_Api_V5_Models_Common_PaginationModel = {
	/**
	 * Page size
	 */
	pageSize?: number
	/**
	 * Total number of results available
	 */
	totalCount?: number
	/**
	 * Current page index
	 */
	pageIndex?: number
	/**
	 * Total number of pages of results with current page size
	 */
	totalPages?: number
	/**
	 * Continuation Token to get next results
	 */
	continuationToken?: string
}
