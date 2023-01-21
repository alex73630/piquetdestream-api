import { Injectable } from "@nestjs/common"
import { HelloAssoDonationPayload } from "../helloasso/interfaces/helloasso-donation.interface"
import { PrismaService } from "../prisma.service"
import { DonationDbDto } from "./dto/donation-db.dto"
import { DonationPerNameDto } from "./dto/donation-per-name.dto"

@Injectable()
export class DatabaseService {
	constructor(private readonly prismaService: PrismaService) {}

	async insertDonation(donation: HelloAssoDonationPayload) {
		return this.prismaService.donation.upsert({
			create: {
				amount: donation.amount,
				createdAt: donation.createdAt,
				id: donation.id,
				message: donation.message,
				name: donation.name
			},
			update: {
				amount: donation.amount,
				createdAt: donation.createdAt,
				message: donation.message,
				name: donation.name
			},
			where: {
				id: donation.id
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
			})),
			skipDuplicates: true
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

	// Get total donations per name, where name can be null (replace null by "Anonyme")
	async getDonationsPerName() {
		const results = await this.prismaService.$queryRaw<
			{
				name: string
				total_donations: bigint
			}[]
		>`
		SELECT
			COALESCE(name, 'Anonyme') as name,
			SUM(amount) as total_donations
		FROM
			"Donation"
		GROUP BY
			name
		ORDER BY
			total_donations DESC;`

		return results.map((donation) => new DonationPerNameDto(donation))
	}
}
