import { BaseConfig } from "../config-class"
import { RedisConfigDto } from "./redis-config.dto"
import { RedisOptions } from "./redis-config.interface"

export class RedisConfig extends BaseConfig<RedisConfigDto, RedisOptions> {
	constructor() {
		super("redis", RedisConfigDto)
	}

	configMappingObject(parsedConfig: RedisConfigDto): RedisOptions {
		return {
			url: parsedConfig.REDIS_URL
		}
	}
}
