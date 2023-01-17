import { INestApplication, ValidationPipe, VersioningType } from "@nestjs/common"
import { NestExpressApplication } from "@nestjs/platform-express"
import { Request, Response } from "express"

export async function setupNest(app: NestExpressApplication | INestApplication): Promise<void> {
	// Setup shutdown hooks
	app.enableShutdownHooks()

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
}
