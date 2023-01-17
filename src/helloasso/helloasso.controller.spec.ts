import { Test, TestingModule } from "@nestjs/testing"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoController", () => {
	let controller: HelloAssoController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloAssoService],
			controllers: [HelloAssoController]
		}).compile()

		controller = module.get<HelloAssoController>(HelloAssoController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
