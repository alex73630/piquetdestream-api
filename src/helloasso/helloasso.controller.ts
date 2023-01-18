import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { HelloAssoNotificationDto } from "./dto/helloasso-notification.dto"
import { HelloAssoService } from "./helloasso.service"
import { HelloAssoNotification, HelloAssoNotificationEventType } from "./interfaces/helloasso-notification.interface"

@ApiTags("HelloAsso")
@Controller("helloasso")
export class HelloAssoController {
	constructor(private readonly helloAssoService: HelloAssoService) {}

	@Post("notifications")
	async handleNotifications(@Body() body: HelloAssoNotificationDto) {
		return this.helloAssoService.handleNotifications(body as HelloAssoNotification)
	}

	@Get("refresh-total")
	async updateTotal() {
		return this.helloAssoService.updateTotalDonationsFromApi()
	}

	@Post("fake-notification")
	async fakeNotification() {
		return this.helloAssoService.handleNotifications({
			eventType: HelloAssoNotificationEventType.ORDER,
			data: {
				amount: {
					total: 1000
				},
				formSlug: "2",
				id: Date.now(),
				payer: {
					firstName: "John",
					lastName: "Doe",
					email: ""
				}
			}
		})
	}
}
