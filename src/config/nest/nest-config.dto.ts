import { Expose, Transform } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Environment } from "./environment.interface"

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
}
