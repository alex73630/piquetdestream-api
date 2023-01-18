import { RedisService } from "@liaoliaots/nestjs-redis"
import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigService } from "../config/config.service"
import { CounterService } from "../counter/counter.service"
import { HelloAssoService } from "./helloasso.service"

describe("HelloAssoService", () => {
	let service: HelloAssoService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloAssoService]
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

		service = module.get<HelloAssoService>(HelloAssoService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
