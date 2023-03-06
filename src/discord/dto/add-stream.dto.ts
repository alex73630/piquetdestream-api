import { Param } from "@discord-nestjs/core"

export class AddStreamDto {
	@Param({ description: "Select a member", required: true })
	member: string

	@Param({ description: "jj/mm/aaaa hh:mm", required: true })
	date: string
}
