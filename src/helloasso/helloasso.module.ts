import { Module } from "@nestjs/common"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
import { CounterModule } from "../counter/counter.module"
import { RedisModule } from "../redis/redis.module"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"

@Module({
	imports: [CounterModule, RedisModule],
	providers: [HelloAssoService, BearerTokenAuthGuard],
	controllers: [HelloAssoController]
})
export class HelloAssoModule {}
