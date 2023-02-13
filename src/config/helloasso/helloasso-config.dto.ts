import { Expose, Transform } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsString, ValidateIf } from "class-validator"

export class HelloAssoConfigDto {
	@Expose()
	@ValidateIf((value) => value.HELLOASSO_CLIENT_ID || value.HELLOASSO_CLIENT_SECRET)
	@IsString()
	@IsNotEmpty()
	HELLOASSO_CLIENT_ID?: string

	@Expose()
	@ValidateIf((value) => value.HELLOASSO_CLIENT_ID || value.HELLOASSO_CLIENT_SECRET)
	@IsString()
	@IsNotEmpty()
	HELLOASSO_CLIENT_SECRET?: string

	@Expose()
	@ValidateIf((value) => value.HELLOASSO_CLIENT_ID || value.HELLOASSO_CLIENT_SECRET)
	@IsBoolean()
	@Transform(({ value }) => value === "true")
	HELLOASSO_ENABLE_MANUAL_FETCHING?: boolean = false
}
