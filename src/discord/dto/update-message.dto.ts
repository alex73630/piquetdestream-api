import { Choice, Param } from "@discord-nestjs/core"
import { BotMessageEnum } from "../interfaces/messages.enum"

export class UpdateMessageDto {
	@Choice(BotMessageEnum)
	@Param({ description: "Message type", required: true })
	type: BotMessageEnum

	@Param({ description: "Message text", required: true })
	text: string
}
