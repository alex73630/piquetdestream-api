import { ApiProperty } from "@nestjs/swagger"
import { HelloAsso_Api_V5_Models_Statistics_Order, HelloAsso_Api_V5_Models_Statistics_Payment } from "../api-interface"
import { HelloAssoNotificationEventType } from "../interfaces/helloasso-notification.interface"

export class HelloAssoNotificationDto {
	@ApiProperty({ name: "eventType", enum: HelloAssoNotificationEventType })
	eventType: HelloAssoNotificationEventType

	@ApiProperty({
		name: "data",
		type: "object",
		description:
			"Matches either HelloAsso.Api.V5.Models.Statistics.Order or HelloAsso.Api.V5.Models.Statistics.Payment from the HelloAsso API documentation (https://api.helloasso.com/v5/swagger/ui/index#/)"
	})
	data: HelloAsso_Api_V5_Models_Statistics_Order | HelloAsso_Api_V5_Models_Statistics_Payment | unknown
}
