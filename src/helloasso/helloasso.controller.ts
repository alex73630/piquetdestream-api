import { Body, Controller, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { HelloAssoNotificationDto } from "./dto/helloasso-notification.dto"
import { HelloAssoService } from "./helloasso.service"

@ApiTags("HelloAsso")
@Controller("helloasso")
export class HelloAssoController {
	constructor(private readonly helloAssoService: HelloAssoService) {}

	@Post("notifications")
	async handleNotifications(@Body() body: HelloAssoNotificationDto) {
		return this.helloAssoService.handleNotifications(body)
	}
}
