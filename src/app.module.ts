import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ExtendedConfigModule } from "./config/config.module"
import { HelloAssoModule } from "./helloasso/helloasso.module"

@Module({
	imports: [ExtendedConfigModule, HelloAssoModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
