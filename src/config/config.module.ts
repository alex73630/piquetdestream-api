import { Global, Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { BaseConfig } from "./config-class"
import { ExtendedConfigService } from "./config.service"
import { ConfigValidate } from "./config.validation"
import { HelloAssoConfig } from "./helloasso/helloasso.config"
import { NestConfig } from "./nest/nest.config"
import { RedisConfig } from "./redis/redis.config"

const ConfigClasses: BaseConfig<any, any>[] = [new NestConfig(), new HelloAssoConfig(), new RedisConfig()]

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
