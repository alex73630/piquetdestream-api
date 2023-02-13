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
import { DatabaseModule } from "./database/database.module"
import { DiscordModule } from "./discord/discord.module"
import { ScheduleModule } from "@nestjs/schedule"

@Module({
	imports: [
		ExtendedConfigModule,
		ScheduleModule.forRoot(),
		...(process.env.DISCORD_BOT_ONLY === "true"
			? []
			: [
					...(process.env.HELLOASSO_CLIENT_ID || process.env.HELLOASSO_CLIENT_SECRET
						? [HelloAssoModule]
						: []),
					CounterModule,
					DatabaseModule,
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
			  ]),
		...(process.env.DISCORD_BOT_TOKEN ? [DiscordModule] : [])
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
