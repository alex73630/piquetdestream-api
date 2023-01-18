import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigService } from "../config/config.service"
import { CounterService } from "../counter/counter.service"
import { HelloAssoController } from "./helloasso.controller"
import { HelloAssoService } from "./helloasso.service"
import { ModuleMocker, MockFunctionMetadata } from "jest-mock"
import { RedisService } from "../redis/redis.service"
import { SchedulerRegistry } from "@nestjs/schedule"
import { BearerTokenAuthGuard } from "../auth/bearer-token.guard"

const moduleMocker = new ModuleMocker(global)

// Mock cron module
jest.mock("cron", () => ({
	CronJob: jest.fn().mockImplementation(() => ({
		start: jest.fn()
	}))
}))

describe("HelloAssoController", () => {
	let controller: HelloAssoController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HelloAssoService, BearerTokenAuthGuard],
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
				// Mock redis service
				if (token === RedisService) {
					const redisServiceMetadata = moduleMocker.getMetadata(RedisService) as MockFunctionMetadata<
						any,
						any
					>

					const redisServiceMock = moduleMocker.generateFromMetadata(redisServiceMetadata)
					return new redisServiceMock()
				}
				// Mock schedulerRegistry
				if (token === SchedulerRegistry) {
					return {
						addCronJob: jest.fn()
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
