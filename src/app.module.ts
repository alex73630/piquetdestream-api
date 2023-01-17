import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ExtendedConfigModule } from "./config/config.module"

@Module({
	imports: [ExtendedConfigModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
