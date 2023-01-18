import { ClassSerializerInterceptor, INestApplication, ValidationPipe, VersioningType } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { Request, Response } from "express"
import helmet from "helmet"
import { ExtendedConfigService } from "./config/config.service"
import { NestOptions } from "./config/nest/nest-config.interface"

export async function setupNest(app: NestExpressApplication | INestApplication): Promise<void> {
	// Setup shutdown hooks
	app.enableShutdownHooks()
	const configService = app.get(ExtendedConfigService)

	app.use(helmet())

	// CORS setup
	const origins = configService.get<NestOptions["corsOrigins"]>("nest.corsOrigins")

	app.enableCors({
		origin: origins,
		credentials: true
	})

	app.use((req: Request, _res: Response, next: () => void) => {
		req.headers.date = new Date().toISOString()
		next()
	})

	app.enableVersioning({
		defaultVersion: "1",
		type: VersioningType.URI
	})

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			transformOptions: {
				enableImplicitConversion: true
			}
		})
	)

	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

	const config = new DocumentBuilder()
		.setTitle("Piquet De Stream API")
		.setDescription("API for the Piquet De Stream project")
		.setVersion("1.0")
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup("docs", app, document, {
		swaggerOptions: {
			docExpansion: "none"
		}
	})
}
