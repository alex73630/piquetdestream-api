import { Module } from "@nestjs/common"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
import { RedisModule } from "../redis/redis.module"
import { CounterController } from "./counter.controller"
import { CounterService } from "./counter.service"

@Module({
	imports: [RedisModule],
	controllers: [CounterController],
	providers: [CounterService, BearerTokenAuthGuard],
	exports: [CounterService]
})
export class CounterModule {}
