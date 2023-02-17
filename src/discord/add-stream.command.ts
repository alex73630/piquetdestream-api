import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { CommandInteraction } from "discord.js"
import { SlashCommandPipe } from "@discord-nestjs/common"
import { Handler, InteractionEvent } from "@discord-nestjs/core"
import { AddStreamDto } from "./dto/add-stream.dto"

@Injectable()
export class AddStreamDate {
	constructor(private readonly prismaService: PrismaService) {}
	@Handler()
	async updateMessage(
		@InteractionEvent(SlashCommandPipe) payload: AddStreamDto,
		interaction: CommandInteraction
	): Promise<void> {
		// await interaction.reply("ok")
		const dateString = payload.date
		const dateRegex = dateString.split(/[\s/]+/) // Split the string into date and time parts
		const [day, month, year, hours, minutes] = dateRegex // Destructure the date and time parts

		const timestampStream = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`).getTime() / 1000 // Create a new Date object and get its timestamp (in seconds)

		try {
			await this.prismaService.StreamDate.upsert({
				where: {
					name: payload.member
				},
				create: {
					streamer: payload.member,
					streamHour: timestampStream
				},
				update: {
					streamHour: timestampStream
				}
			})

			await interaction.reply("Message updated")
		} catch (error: any) {
			await interaction.reply("Error updating message")
		}
	}

	// constructor(private readonly prismaService: PrismaService) {}
	// async create(member: GuildMember) {
	// 	await this.prismaService.StreamDate.create({
	// 		data: {
	// 			streamer: member.user.username
	// 		}
	// 	})
	// }
	// async addAllMembers(client: Client) {
	// 	const guild = client.guilds.cache.get("1074690667235790869")
	// 	if (guild) {
	// 		const members = await guild.members.fetch()
	// 		for (const [, member] of members) {
	// 			if (member) {
	// 				await this.create(member)
	// 			}
	// 		}
	// 		console.log(`Added ${members.size} members to the database.`)
	// 	}
	// }
}
