/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelloAsso_Api_V5_Models_Common_MetaModel } from './HelloAsso_Api_V5_Models_Common_MetaModel';
import type { HelloAsso_Api_V5_Models_Enums_PaymentCashOutState } from './HelloAsso_Api_V5_Models_Enums_PaymentCashOutState';
import type { HelloAsso_Api_V5_Models_Enums_PaymentMeans } from './HelloAsso_Api_V5_Models_Enums_PaymentMeans';
import type { HelloAsso_Api_V5_Models_Enums_PaymentOffLineMeansModel } from './HelloAsso_Api_V5_Models_Enums_PaymentOffLineMeansModel';
import type { HelloAsso_Api_V5_Models_Enums_PaymentState } from './HelloAsso_Api_V5_Models_Enums_PaymentState';
import type { HelloAsso_Api_V5_Models_Enums_PaymentType } from './HelloAsso_Api_V5_Models_Enums_PaymentType';
import type { HelloAsso_Api_V5_Models_Statistics_OrderLight } from './HelloAsso_Api_V5_Models_Statistics_OrderLight';
import type { HelloAsso_Api_V5_Models_Statistics_Payer } from './HelloAsso_Api_V5_Models_Statistics_Payer';
import type { HelloAsso_Api_V5_Models_Statistics_PaymentItem } from './HelloAsso_Api_V5_Models_Statistics_PaymentItem';

export type HelloAsso_Api_V5_Models_Statistics_PaymentDetail = {
	/**
	 * The order of this payment
	 */
	order?: HelloAsso_Api_V5_Models_Statistics_OrderLight;
	/**
	 * The payer of this payment
	 */
	payer?: HelloAsso_Api_V5_Models_Statistics_Payer;
	/**
	 * Items linked to this payment
	 */
	items?: Array<HelloAsso_Api_V5_Models_Statistics_PaymentItem>;
	/**
	 * The date of the cash out
	 */
	cashOutDate?: string;
	/**
	 * The cash out state : payment transfer status
	 */
	cashOutState?: HelloAsso_Api_V5_Models_Enums_PaymentCashOutState;
	/**
	 * The Payment Receipt Url
	 */
	paymentReceiptUrl?: string;
	/**
	 * The Fiscal Receipt Url
	 */
	fiscalReceiptUrl?: string;
	/**
	 * The ID of the payment
	 */
	id?: number;
	/**
	 * Total Amount of the payment (in cents)
	 */
	amount?: number;
	/**
	 * Tip Amount of the payment (in cents)
	 */
	amountTip?: number;
	/**
	 * Date of the payment
	 */
	date?: string;
	/**
	 * The payment means used
	 */
	paymentMeans?: HelloAsso_Api_V5_Models_Enums_PaymentMeans;
	/**
	 * Indicates the payment number (useful in the case of an order comprising payments with installments)
	 */
	installmentNumber?: number;
	/**
	 * Payment state
	 */
	state?: HelloAsso_Api_V5_Models_Enums_PaymentState;
	/**
	 * Payment type : a payment with a 'REGISTERED' state can be of three different types, OFFLINE, CREDIT or DEBIT (adjustment)
	 */
	type?: HelloAsso_Api_V5_Models_Enums_PaymentType;
	/**
	 * Meta CreatedDate/UpdatedDate
	 */
	meta?: HelloAsso_Api_V5_Models_Common_MetaModel;
	/**
	 * Payment off line mean
	 */
	paymentOffLineMean?: HelloAsso_Api_V5_Models_Enums_PaymentOffLineMeansModel;
};

