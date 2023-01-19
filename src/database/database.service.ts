import { Injectable } from "@nestjs/common"
import { HelloAssoDonationPayload } from "../helloasso/interfaces/helloasso-donation.interface"
import { PrismaService } from "../prisma.service"
import { DonationDbDto } from "./dto/donation-db.dto"

@Injectable()
export class DatabaseService {
	constructor(private readonly prismaService: PrismaService) {}

	async insertDonation(donation: HelloAssoDonationPayload) {
		return this.prismaService.donation.create({
			data: {
				amount: donation.amount,
				createdAt: donation.createdAt,
				id: donation.id,
				message: donation.message,
				name: donation.name
			}
		})
	}

	async insertDonations(donations: HelloAssoDonationPayload[]) {
		return this.prismaService.donation.createMany({
			data: donations.map((donation) => ({
				amount: donation.amount,
				createdAt: donation.createdAt,
				id: donation.id,
				message: donation.message,
				name: donation.name
			}))
		})
	}

	// Get donations with pagination
	async getDonations(skip = 0, take = 10) {
		const results = await this.prismaService.donation.findMany({
			skip,
			take,
			orderBy: {
				createdAt: "desc"
			}
		})

		return results.map((donation) => new DonationDbDto(donation))
	}
}
