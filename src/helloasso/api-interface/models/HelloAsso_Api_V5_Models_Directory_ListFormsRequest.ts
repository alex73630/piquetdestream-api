/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Enums_FormType } from "./HelloAsso_Api_V5_Models_Enums_FormType"

export type HelloAsso_Api_V5_Models_Directory_ListFormsRequest = {
	/**
	 * Textual search for form name
	 */
	formName?: string
	/**
	 * Textual search for form description
	 */
	formDescription?: string
	/**
	 * The zip codes where the forms are located
	 */
	formZipCodes?: Array<string>
	/**
	 * The cities where the forms are located
	 */
	formCities?: Array<string>
	/**
	 * The regions where the forms are located
	 */
	formRegions?: Array<string>
	/**
	 * The departments where the forms are located
	 */
	formDepartments?: Array<string>
	/**
	 * The countries where the forms are located
	 */
	formCountries?: Array<string>
	/**
	 * The form types : CrowdFunding, Membership, Event, Donation, PaymentForm ...
	 */
	formTypes?: Array<HelloAsso_Api_V5_Models_Enums_FormType>
	/**
	 * The Activity Type of the form
	 */
	formActivityType?: Array<string>
	/**
	 * The minimum publication date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formPublicationStartDateMin?: string
	/**
	 * The maximum publication date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formPublicationStartDateMax?: string
	/**
	 * The minimum start date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formStartDateMin?: string
	/**
	 * The maximum start date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formStartDateMax?: string
	/**
	 * The maximum end date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formEndDateMax?: string
	/**
	 * The minimum end date of the forms, format "yyyy-MM-ddTHH:mm:ss.fffK"
	 */
	formEndDateMin?: string
	/**
	 * Allow only free forms if true
	 */
	formIsFree?: boolean
	/**
	 * Allow only forms with remaning entries if true
	 */
	formHasRemainingEntries?: boolean
	/**
	 * Allow only forms with internal tags
	 * this filter is for special operations only
	 */
	formInternalTags?: Array<string>
	/**
	 * Allow only forms with public tags
	 */
	formPublicTags?: Array<string>
	/**
	 * Textual search for organization name
	 */
	organizationName?: string
	/**
	 * Textual search for organization description
	 */
	organizationDescription?: string
	/**
	 * The categories of the forms
	 */
	organizationCategories?: Array<string>
	/**
	 * The organization types
	 */
	organizationTypes?: Array<string>
	/**
	 * The zip codes where the organizations are located
	 */
	organizationZipCodes?: Array<string>
	/**
	 * The cities where the organizations are located
	 */
	organizationCities?: Array<string>
	/**
	 * The regions where the organizations are located
	 */
	organizationRegions?: Array<string>
	/**
	 * The departments where the organizations are located
	 */
	organizationDepartments?: Array<string>
	/**
	 * Allow only organization with a fiscal receipt eligibility
	 */
	organizationFiscalReceiptEligibility?: boolean
	/**
	 * Organization linked partners
	 */
	organizationLinkedPartners?: Array<string>
}
