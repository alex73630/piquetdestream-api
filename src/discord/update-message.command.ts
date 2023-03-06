import { Command, Handler, InteractionEvent } from "@discord-nestjs/core"
import { CommandInteraction } from "discord.js"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { SlashCommandPipe } from "@discord-nestjs/common"
import { UpdateMessageDto } from "./dto/update-message.dto"

@Command({
	name: "update-message",
	description: "Update automatic messages that are sent by the bot"
})
@Injectable()
export class UpdateMessage {
	constructor(private readonly prismaService: PrismaService) {}
	@Handler()
	async updateMessage(
		@InteractionEvent(SlashCommandPipe) payload: UpdateMessageDto,
		interaction: CommandInteraction
	): Promise<void> {
		// await interaction.reply("ok")
		try {
			await this.prismaService.discordBotMessages.upsert({
				where: {
					name: payload.type
				},
				create: {
					name: payload.type,
					createdAt: new Date().getTime(),
					message: payload.text
				},
				update: {
					message: payload.text
				}
			})

			await interaction.reply("Message updated")
		} catch (error: any) {
			await interaction.reply("Error updating message")
		}
	}
}
