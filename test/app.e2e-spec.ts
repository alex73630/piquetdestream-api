import { Test, TestingModule } from "@nestjs/testing"
import { INestApplication } from "@nestjs/common"
import * as request from "supertest"
import { AppModule } from "./../src/app.module"
import { setupNest } from "../src/setup-nest"

describe("AppController (e2e)", () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile()

		app = moduleFixture.createNestApplication()
		setupNest(app)
		await app.init()
	})

	it("/ (GET)", () => {
		return request(app.getHttpServer()).get("/v1/").expect(200).expect("Hello World!")
	})
})
