import { BaseConfig } from "../config-class"
import { NestConfigDto } from "./nest-config.dto"
import { NestOptions } from "./nest-config.interface"

export class NestConfig extends BaseConfig<NestConfigDto, NestOptions> {
	constructor() {
		super("nest", NestConfigDto)
	}

	configMappingObject(parsedConfig: NestConfigDto): NestOptions {
		return {
			env: parsedConfig.NODE_ENV,
			port: parsedConfig.PORT,
			corsOrigins: parsedConfig.CORS_ORIGINS,
			authToken: parsedConfig.AUTH_TOKEN,
			databaseUrl: parsedConfig.DATABASE_URL
		}
	}
}
