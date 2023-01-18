import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigModule } from "../config/config.module"
import { CounterService } from "../counter/counter.service"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoController", () => {
	let controller: HelloAssoController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [ExtendedConfigModule],
			providers: [HelloAssoService, CounterService],
			controllers: [HelloAssoController]
		}).compile()

		controller = module.get<HelloAssoController>(HelloAssoController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
