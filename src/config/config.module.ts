import { Global, Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { BaseConfig } from "./config-class"
import { ExtendedConfigService } from "./config.service"
import { ConfigValidate } from "./config.validation"
import { NestConfig } from "./nest/nest.config"

const ConfigClasses: BaseConfig<any, any>[] = [new NestConfig()]

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [
				...ConfigClasses.flatMap((configClass) => {
					return configClass.config()
				})
			],
			validate: (config) =>
				ConfigValidate(
					config,
					ConfigClasses.map((configClass) => configClass.dto)
				)
		})
	],
	providers: [ExtendedConfigService],
	exports: [ExtendedConfigService]
})
export class ExtendedConfigModule {}
