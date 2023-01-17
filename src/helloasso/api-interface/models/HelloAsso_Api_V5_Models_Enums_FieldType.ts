/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * * `Date` - This field represent a date matching ISO 8601 DateTimeOffset
 * * `TextInput` - This fields in limited text 250 char
 * * `FreeText` - Same as TextInput
 * * `ChoiceList` - A multi choice list, with values specified int the field definition
 * * `File` - A file to be uploaded
 * * `YesNo` - A simple checkbox
 * * `Phone` - The field should be a phone number
 * * `Zipcode` - The field should be a valid phone number
 * * `Number` - The field should be a number
 */
export enum HelloAsso_Api_V5_Models_Enums_FieldType {
	DATE = "Date",
	TEXT_INPUT = "TextInput",
	FREE_TEXT = "FreeText",
	CHOICE_LIST = "ChoiceList",
	FILE = "File",
	YES_NO = "YesNo",
	PHONE = "Phone",
	ZIPCODE = "Zipcode",
	NUMBER = "Number"
}
