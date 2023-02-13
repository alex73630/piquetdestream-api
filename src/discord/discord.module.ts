import { Module } from "@nestjs/common"
import { DiscordModule as DiscordNestModule } from "@discord-nestjs/core"
import { ExtendedConfigModule } from "../config/config.module"
import { ExtendedConfigService } from "../config/config.service"
import { GatewayIntentBits } from "discord.js"
import { BotGateway } from "./bot.gateway"

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
				}
			})
		})
	],
	providers: [BotGateway]
})
export class DiscordModule {}
