import { Test, TestingModule } from "@nestjs/testing"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"
import { ExtendedConfigService } from "../config/config.service"
import { DatabaseService } from "../database/database.service"
import { RedisService } from "../redis/redis.service"
import { CounterController } from "./counter.controller"
import { CounterService } from "./counter.service"

describe("CounterController", () => {
	let controller: CounterController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CounterService, BearerTokenAuthGuard],
			controllers: [CounterController]
		})
			.useMocker((token) => {
				// Mock config service
				if (token === ExtendedConfigService) {
					return {
						get: jest.fn().mockImplementation((key) => {
							if (key === "nest.authToken") {
								return "authToken"
							}
						})
					}
				}
				// Mock redis service
				if (token === RedisService) {
					return {
						setCounterValue: jest.fn(),
						getCounterValue: jest.fn().mockResolvedValue({
							amount: 15000,
							updatedAt: 0
						}),
						addDonation: jest.fn(),
						getDonations: jest.fn()
					}
				}
				// Mock database service
				if (token === DatabaseService) {
					return {
						donation: {
							create: jest.fn(),
							createMany: jest.fn(),
							findMany: jest.fn()
						}
					}
				}
			})
			.compile()

		controller = module.get<CounterController>(CounterController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})

	it("should return the current state", () => {
		expect(controller.getState()).resolves.toEqual({
			amount: "150.00",
			updatedAt: expect.any(Number)
		})
	})
})
