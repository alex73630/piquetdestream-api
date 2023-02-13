import { BaseConfig } from "../config-class"
import { DiscordConfigDto } from "./discord-config.dto"
import { DiscordOptions } from "./discord-config.interface"

export class DiscordConfig extends BaseConfig<DiscordConfigDto, DiscordOptions> {
	constructor() {
		super("discord", DiscordConfigDto)
	}

	configMappingObject(parsedConfig: DiscordConfigDto): DiscordOptions {
		return {
			botToken: parsedConfig.DISCORD_BOT_TOKEN,
			botOnly: parsedConfig.DISCORD_BOT_ONLY
		}
	}
}
