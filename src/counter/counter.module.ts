import { Module } from "@nestjs/common"
import { RedisModule } from "../redis/redis.module"
import { CounterController } from "./counter.controller"
import { CounterService } from "./counter.service"

@Module({
	imports: [RedisModule],
	controllers: [CounterController],
	providers: [CounterService],
	exports: [CounterService]
})
export class CounterModule {}
