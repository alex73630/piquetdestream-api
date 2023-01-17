import { Module } from "@nestjs/common"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"

@Module({
	providers: [HelloAssoService],
	controllers: [HelloAssoController]
})
export class HelloAssoModule {}
