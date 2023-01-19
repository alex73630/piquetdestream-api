import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { DonationDbDto } from "../../database/dto/donation-db.dto"
import { amountToFloat } from "../../utils/utils"

export class CounterDonationDto {
	constructor(donation: DonationDbDto) {
		this.id = donation.id
		this.amount = amountToFloat(donation.amount)
		this.name = donation.name
		this.message = donation.message
		this.createdAt = donation.createdAt
	}

	@ApiProperty({
		example: 123
	})
	id: number

	@ApiProperty({
		example: "13.12"
	})
	amount: string

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
