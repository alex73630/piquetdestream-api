import { Injectable, Logger } from "@nestjs/common"
import {
	HelloAssoApi,
	HelloAsso_Api_V5_Models_Statistics_Order,
	HelloAsso_Api_V5_Models_Statistics_Payment
} from "./api-interface"
import { HelloAssoNotification } from "./interfaces/helloasso-notification.interface"

@Injectable()
export class HelloAssoService {
	private readonly apiClient: HelloAssoApi
	private readonly logger: Logger = new Logger(HelloAssoService.name)

	constructor() {
		this.apiClient = new HelloAssoApi()
	}

	async handleNotifications(payload: HelloAssoNotification) {
		switch (payload.eventType) {
			case "Order":
				this.logger.debug("Order notification received")
				return this.handleOrderNotification(payload.data)
			case "Payment":
				this.logger.debug("Payment notification received")
				return this.handlePaymentNotification(payload.data)
			case "Form":
				this.logger.warn("Form notification not handled")
				return
		}
	}

	private async handleOrderNotification(_data: HelloAsso_Api_V5_Models_Statistics_Order) {
		// ...
	}

	private async handlePaymentNotification(_data: HelloAsso_Api_V5_Models_Statistics_Payment) {
		// ...
	}
}
