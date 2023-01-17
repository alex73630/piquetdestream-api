import { HelloAsso_Api_V5_Models_Statistics_Order, HelloAsso_Api_V5_Models_Statistics_Payment } from "../api-interface"
import { HelloAssoNotificationEventType } from "../interfaces/helloasso-notification.interface"

export class HelloAssoNotificationDto {
	eventType: HelloAssoNotificationEventType
	data: HelloAsso_Api_V5_Models_Statistics_Order | HelloAsso_Api_V5_Models_Statistics_Payment | unknown
}
