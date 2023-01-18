import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ExtendedConfigModule } from "./config/config.module"
import { HelloAssoModule } from "./helloasso/helloasso.module"
import { CounterModule } from "./counter/counter.module"
import { RedisModule } from "./redis/redis.module"
import { RedisModule as NestRedisModule } from "@liaoliaots/nestjs-redis"
import { RedisOptions } from "./config/redis/redis-config.interface"
import { ExtendedConfigService } from "./config/config.service"

@Module({
	imports: [
		ExtendedConfigModule,
		HelloAssoModule,
		CounterModule,
		RedisModule,
		NestRedisModule.forRootAsync({
			imports: [ExtendedConfigModule],
			inject: [ExtendedConfigService],
			useFactory: async (configService: ExtendedConfigService) => {
				return {
					config: {
						url: configService.get<RedisOptions["url"]>("redis.url")
					}
				}
			}
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
