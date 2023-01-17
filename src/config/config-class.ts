import { ConfigObject, registerAs } from "@nestjs/config"
import { ClassConstructor, plainToClass } from "class-transformer"

export class BaseConfig<T, I extends ConfigObject> {
	readonly dto: ClassConstructor<T>
	readonly token: string
	constructor(token: string, dto: ClassConstructor<T>) {
		this.dto = dto
		this.token = token
	}

	config() {
		return registerAs<I>(this.token, () => {
			const parsedConfig = this.parseConfig()
			return this.configMappingObject(parsedConfig)
		})
	}

	configMappingObject(parsedConfig: T): I {
		return { ...parsedConfig } as unknown as I
	}

	parseConfig(): T {
		return plainToClass(this.dto, process.env, { excludeExtraneousValues: true, exposeUnsetFields: false })
	}
}
