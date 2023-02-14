import { Module } from "@nestjs/common"
import { DiscordModule as DiscordNestModule } from "@discord-nestjs/core"
import { ExtendedConfigModule } from "../config/config.module"
import { ExtendedConfigService } from "../config/config.service"
import { GatewayIntentBits } from "discord.js"
import { BotGateway } from "./bot.gateway"
import { DatabaseModule } from "../database/database.module"
import { UpdateMessage } from "./update-message.command"

@Module({
	imports: [
		DiscordNestModule.forRootAsync({
			imports: [ExtendedConfigModule],
			inject: [ExtendedConfigService],
			useFactory: (configService: ExtendedConfigService) => ({
				token: configService.get("discord.botToken"),
				discordClientOptions: {
					intents: [
						GatewayIntentBits.Guilds,
						GatewayIntentBits.GuildMessages,
						GatewayIntentBits.GuildMessageReactions,
						GatewayIntentBits.GuildMembers
					]
				},
				registerCommandOptions: [
					{
						forGuild: "1074690667235790869",
						removeCommandsBefore: true
					}
				]
			})
		}),
		DatabaseModule
	],
	providers: [BotGateway, UpdateMessage]
})
export class DiscordModule {}
