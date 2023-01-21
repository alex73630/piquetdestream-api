import { ApiProperty } from "@nestjs/swagger"
import { amountToFloat } from "../../utils/utils"

export class DonationPerNameDto {
	constructor(payload: { name: string; total_donations: bigint }) {
		console.log(payload.total_donations)
		this.name = payload.name
		this.totalDonations = amountToFloat(parseInt(payload.total_donations.toString()))
	}

	@ApiProperty({
		example: "twitch_user"
	})
	name: string

	@ApiProperty({
		example: "13.12"
	})
	totalDonations: string
}
