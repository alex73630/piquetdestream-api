import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigService } from "../config/config.service"
import { CounterService } from "../counter/counter.service"
import { HelloAssoService } from "./helloasso.service"
import { ModuleMocker, MockFunctionMetadata } from "jest-mock"
import { RedisService } from "../redis/redis.service"

const moduleMocker = new ModuleMocker(global)

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
				// Mock redis service
				if (token === RedisService) {
					const redisServiceMetadata = moduleMocker.getMetadata(RedisService) as MockFunctionMetadata<
						any,
						any
					>

					const redisServiceMock = moduleMocker.generateFromMetadata(redisServiceMetadata)
					return new redisServiceMock()
				}
			})
			.compile()

		service = module.get<HelloAssoService>(HelloAssoService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
