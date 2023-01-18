import { BaseConfig } from "../config-class"
import { HelloAssoConfigDto } from "./helloasso-config.dto"
import { HelloAssoOptions } from "./helloasso-config.interface"

export class HelloAssoConfig extends BaseConfig<HelloAssoConfigDto, HelloAssoOptions> {
	constructor() {
		super("helloasso", HelloAssoConfigDto)
	}

	configMappingObject(parsedConfig: HelloAssoConfigDto): HelloAssoOptions {
		return {
			clientId: parsedConfig.HELLOASSO_CLIENT_ID,
			clientSecret: parsedConfig.HELLOASSO_CLIENT_SECRET,
			accessToken: parsedConfig.HELLOASSO_ACCESS_TOKEN
		}
	}
}
