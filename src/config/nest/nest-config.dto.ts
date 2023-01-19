import { Expose, Transform } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumber, IsString, ValidateIf } from "class-validator"
import { Environment } from "./environment.interface"
import isCi from "is-ci"

export class NestConfigDto {
	@Expose()
	@IsEnum(Environment)
	NODE_ENV: Environment

	@Expose()
	@Transform(({ value }) => (Number(value) > 0 ? Number(value) : 3000))
	@IsNumber()
	PORT: number

	@Expose()
	@Transform(({ value }) => value?.split(","))
	@IsString({ each: true })
	@IsNotEmpty()
	CORS_ORIGINS: string[]

	@Expose()
	@IsString()
	@IsNotEmpty()
	AUTH_TOKEN: string

	@Expose()
	@IsString()
	@IsNotEmpty()
	// Validate if not in CI, test or jest worker
	@ValidateIf(() => !(isCi || process.env.NODE_ENV === Environment.Test || !!process.env.JEST_WORKER_ID))
	DATABASE_URL: string
}
