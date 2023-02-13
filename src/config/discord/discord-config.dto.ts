import { Expose, Transform } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsString, ValidateIf } from "class-validator"

export class DiscordConfigDto {
	@Expose()
	@ValidateIf((value) => value.DISCORD_BOT_TOKEN)
	@IsString()
	@IsNotEmpty()
	DISCORD_BOT_TOKEN?: string

	@Expose()
	@ValidateIf((value) => value.DISCORD_BOT_TOKEN)
	@IsBoolean()
	@Transform(({ value }) => value === "true")
	DISCORD_BOT_ONLY?: boolean = false
}
