import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ExtendedConfigModule } from "./config/config.module"
import { HelloAssoModule } from "./helloasso/helloasso.module"
import { CounterModule } from "./counter/counter.module"

@Module({
	imports: [ExtendedConfigModule, HelloAssoModule, CounterModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
