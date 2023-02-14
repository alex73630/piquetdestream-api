import { Injectable, Logger } from "@nestjs/common"
import { Once, InjectDiscordClient, On } from "@discord-nestjs/core"
import { Client, Events, GuildMember } from "discord.js"
import { PrismaService } from "../prisma.service"

@Injectable()
export class BotGateway {
	private readonly logger = new Logger(BotGateway.name)

	constructor(
		@InjectDiscordClient()
		private readonly client: Client,
		private readonly prismaService: PrismaService
	) {}

	@Once("ready")
	onReady() {
		this.logger.log(`Bot ${this.client.user.tag} was started!`)
	}

	@On(Events.GuildMemberAdd)
	async onGuildMemberAdd(member: GuildMember) {
		this.logger.log(`New member ${member.user.tag} joined!`)

		// Load the bienvenu message from the database
		const message = await this.prismaService.discordBotMessages.findFirst({
			where: { name: "WELCOME" }
		})
		// Send a set data Base private message to the new member
		if (message) {
			return await member.send(message.message)
		}
		// Send a default private message to the new member
		await member.send("Bienvenue sur le serveur!")
	}
}
