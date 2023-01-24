import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { AppModule } from "./app.module"
import { ExtendedConfigService } from "./config/config.service"
import { NestOptions } from "./config/nest/nest-config.interface"
import { setupNest } from "./setup-nest"

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		bufferLogs: true
	})

	// Load config service
	const configService = app.get(ExtendedConfigService)

	// Setup logger
	const logger = new Logger("NestApplication")
	app.useLogger(logger)

	// Setup the server
	setupNest(app, logger)

	// Start listening
	const port = configService.get<NestOptions["port"]>("nest.port", 3000)
	await app.listen(port, "0.0.0.0")
	logger.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
