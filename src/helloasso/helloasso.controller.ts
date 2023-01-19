import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
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

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Get("refresh-total")
	async updateTotal() {
		return this.helloAssoService.updateTotalDonationsFromApi()
	}

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
	@Get("refresh-donations")
	async updateDonations() {
		return this.helloAssoService.getDonationsSinceLastFetch()
	}

	@UseGuards(BearerTokenAuthGuard)
	@ApiBearerAuth()
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
				},
				meta: {
					createdAt: new Date().toISOString()
				},
				items: [
					{
						customFields: [
							{
								name: "Votre message de soutien",
								answer: "On lâche rien !"
							},
							{
								name: "Anonymisation ?",
								answer: "Non"
							},
							{
								name: "Ton pseudo Twitch",
								answer: "alex73630"
							}
						]
					}
				]
			}
		})
	}
}
