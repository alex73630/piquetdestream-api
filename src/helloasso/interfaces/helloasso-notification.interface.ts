import {
	HelloAsso_Api_V5_Models_Forms_FormPublicModel,
	HelloAsso_Api_V5_Models_Statistics_OrderDetail,
	HelloAsso_Api_V5_Models_Statistics_PaymentDetail
} from "../api-interface"

export enum HelloAssoNotificationEventType {
	ORDER = "Order",
	PAYMENT = "Payment",
	FORM = "Form"
}

export type HelloAssoNotification =
	| HelloAssoOrderNotification
	| HelloAssoPaymentNotification
	| HelloAssoFormNotification

export interface HelloAssoOrderNotification {
	eventType: HelloAssoNotificationEventType.ORDER
	data: HelloAsso_Api_V5_Models_Statistics_OrderDetail
}

export interface HelloAssoPaymentNotification {
	eventType: HelloAssoNotificationEventType.PAYMENT
	data: HelloAsso_Api_V5_Models_Statistics_PaymentDetail
}

export interface HelloAssoFormNotification {
	eventType: HelloAssoNotificationEventType.FORM
	data: HelloAsso_Api_V5_Models_Forms_FormPublicModel
}
