import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigModule } from "../config/config.module"
import { ExtendedConfigService } from "../config/config.service"
import { CounterService } from "../counter/counter.service"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoController", () => {
	let controller: HelloAssoController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloAssoService],
			controllers: [HelloAssoController]
		})
			.useMocker((token) => {
				// Mock config service
				if (token === ExtendedConfigService) {
					return {
						get: jest.fn().mockImplementation((key) => {
							if (key === "helloasso.accessToken") {
								return "accessToken"
							}
						})
					}
				}
				// Mock counter service
				if (token === CounterService) {
					return {
						newDonation: jest.fn(),
						updateCounter: jest.fn(),
						getState: jest.fn()
					}
				}
			})
			.compile()

		controller = module.get<HelloAssoController>(HelloAssoController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
