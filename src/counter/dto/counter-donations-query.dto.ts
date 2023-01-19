import { IsNumber, IsOptional, Min, Max } from "class-validator"

export class CounterDonationsQueryDto {
	@IsNumber()
	@IsOptional()
	@Min(0)
	@Max(100)
	limit?: number

	@IsNumber()
	@IsOptional()
	@Min(0)
	offset?: number
}
