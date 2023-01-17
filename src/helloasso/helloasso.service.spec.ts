import { Test, TestingModule } from "@nestjs/testing"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoService", () => {
	let service: HelloAssoService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloAssoService]
		}).compile()

		service = module.get<HelloAssoService>(HelloAssoService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
