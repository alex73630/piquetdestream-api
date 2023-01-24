import { Test, TestingModule } from "@nestjs/testing"
import { INestApplication, Logger } from "@nestjs/common"
import * as request from "supertest"
import { setupNest } from "../src/setup-nest"
import { MockModule } from "../src/utils/mock.module"
import { ExtendedConfigModule } from "../src/config/config.module"
import { AppController } from "../src/app.controller"
import { AppService } from "../src/app.service"

jest.mock("@liaoliaots/nestjs-redis", () => {
	return {
		NestRedisModule: {
			forRootAsync: jest.fn().mockImplementation(() => MockModule)
		}
	}
})

describe("AppController (e2e)", () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [ExtendedConfigModule],
			controllers: [AppController],
			providers: [AppService]
		}).compile()

		const logger = new Logger("NestApplication")

		app = moduleFixture.createNestApplication()
		setupNest(app, logger)
		await app.init()
	})

	it("/v1/ (GET)", () => {
		return request(app.getHttpServer()).get("/v1/").expect(200).expect("Hello World!")
	})

	afterAll(async () => {
		await app.close()
	})
})
