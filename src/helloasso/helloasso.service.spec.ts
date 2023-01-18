import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigModule } from "../config/config.module"
import { CounterService } from "../counter/counter.service"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoService", () => {
	let service: HelloAssoService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [ExtendedConfigModule],
			providers: [HelloAssoService, CounterService]
		}).compile()

		service = module.get<HelloAssoService>(HelloAssoService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
