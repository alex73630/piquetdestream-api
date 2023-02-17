import { Injectable } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"
import { Client } from "discord.js"
import { PrismaService } from "../prisma.service"

@Injectable()
export class RemindStream {
	private readonly client: Client
	private readonly prismaService: PrismaService

	@Cron("0 1 * * * *") // dtb check every hours
	async sendMessage() {
		const date = new Date()
		const timestamp = Math.floor(date.getTime() / 1000)
		const remind = timestamp + 7200

		// remove 2 hour to the current date

		const data = await this.prismaService.StreamDate.findMany({
			where: { streamHour: remind }
		})

		for (const item of data) {
			const user = await this.client.users.fetch(item.streamer)

			if (user === data.streamer) {
				user.send("attention tu passe en live a " + data.streamHour + ".") // Replace with your message
			}
		}
	}
}
