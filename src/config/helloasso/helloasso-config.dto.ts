import { Expose } from "class-transformer"
import { IsString } from "class-validator"

export class HelloAssoConfigDto {
	@Expose()
	@IsString()
	HELLOASSO_CLIENT_ID: string

	@Expose()
	@IsString()
	HELLOASSO_CLIENT_SECRET: string

	@Expose()
	@IsString()
	HELLOASSO_ACCESS_TOKEN: string
}
