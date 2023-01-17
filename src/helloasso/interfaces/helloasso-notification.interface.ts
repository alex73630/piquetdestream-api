import { HelloAsso_Api_V5_Models_Statistics_Order, HelloAsso_Api_V5_Models_Statistics_Payment } from "../api-interface"

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
	data: HelloAsso_Api_V5_Models_Statistics_Order
}

export interface HelloAssoPaymentNotification {
	eventType: HelloAssoNotificationEventType.PAYMENT
	data: HelloAsso_Api_V5_Models_Statistics_Payment
}

export interface HelloAssoFormNotification {
	eventType: HelloAssoNotificationEventType.FORM
	data: unknown
}
