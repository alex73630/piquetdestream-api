import { Test, TestingModule } from "@nestjs/testing"
import { ExtendedConfigService } from "../config/config.service"
import { CounterService } from "../counter/counter.service"
import { HelloAssoService } from "./helloasso.service"
import { ModuleMocker, MockFunctionMetadata } from "jest-mock"
import { RedisService } from "../redis/redis.service"
import { SchedulerRegistry } from "@nestjs/schedule"
import { DatabaseService } from "../database/database.service"

const moduleMocker = new ModuleMocker(global)

// Mock cron module
jest.mock("cron", () => ({
	CronJob: jest.fn().mockImplementation(() => ({
		start: jest.fn()
	}))
}))

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
				// Mock schedulerRegistry
				if (token === SchedulerRegistry) {
					return {
						addCronJob: jest.fn()
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

		service = module.get<HelloAssoService>(HelloAssoService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
