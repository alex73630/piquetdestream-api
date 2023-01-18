import { Expose, Transform } from "class-transformer"
import { IsBoolean, IsString } from "class-validator"

export class HelloAssoConfigDto {
	@Expose()
	@IsString()
	HELLOASSO_CLIENT_ID: string

	@Expose()
	@IsString()
	HELLOASSO_CLIENT_SECRET: string

	@Expose()
	@IsBoolean()
	@Transform(({ value }) => value === "true")
	HELLOASSO_ENABLE_MANUAL_FETCHING: boolean
}
