import { Body, Controller, Post } from "@nestjs/common"
import { HelloAssoNotificationDto } from "./dto/helloasso-notification.dto"
import { HelloAssoService } from "./helloasso.service"

@Controller("helloasso")
export class HelloAssoController {
	constructor(private readonly helloAssoService: HelloAssoService) {}

	@Post("notifications")
	async handleNotifications(@Body() body: HelloAssoNotificationDto) {
		return this.helloAssoService.handleNotifications(body)
	}
}
