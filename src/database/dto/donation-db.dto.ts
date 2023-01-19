import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Donation } from "@prisma/client"
import { HelloAssoDonationPayload } from "../../helloasso/interfaces/helloasso-donation.interface"

export class DonationDbDto implements HelloAssoDonationPayload {
	constructor(payload: Donation) {
		this.id = payload.id
		this.amount = payload.amount
		this.name = payload.name
		this.message = payload.message
		this.createdAt = parseInt(payload.createdAt.toString())
	}

	@ApiProperty({
		example: 123
	})
	id: number

	@ApiProperty({
		example: 1312
	})
	amount: number

	@ApiPropertyOptional({
		example: "twitch_user"
	})
	name?: string

	@ApiPropertyOptional({
		example: "Hello world!"
	})
	message?: string

	@ApiProperty({
		example: 1611234567890
	})
	createdAt: number
}
