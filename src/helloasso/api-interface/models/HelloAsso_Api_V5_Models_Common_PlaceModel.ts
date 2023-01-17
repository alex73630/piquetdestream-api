/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Models_Shared_GeoLocation } from './HelloAsso_Models_Shared_GeoLocation';

/**
 * PlaceModel class
 */
export type HelloAsso_Api_V5_Models_Common_PlaceModel = {
	/**
	 * Address
	 */
	address?: string;
	/**
	 * Name of the place
	 */
	name?: string;
	/**
	 * City
	 */
	city?: string;
	/**
	 * ZipCode
	 */
	zipCode?: string;
	/**
	 * 3 letter country code
	 */
	country?: string;
	/**
	 * Geolocation (latitude and longitude), filled on directory routes
	 */
	geoLocation?: HelloAsso_Models_Shared_GeoLocation;
};

