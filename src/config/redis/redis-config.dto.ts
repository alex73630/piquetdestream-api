import { Expose } from "class-transformer"
import { IsString } from "class-validator"

export class RedisConfigDto {
	@Expose()
	@IsString()
	REDIS_URL: string
}
