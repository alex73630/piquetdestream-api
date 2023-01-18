import { Test, TestingModule } from "@nestjs/testing"
import { RedisService } from "./redis.service"
import { ExtendedConfigService } from "../config/config.service"
import { getRedisToken } from "@liaoliaots/nestjs-redis"

// Mock ioredis
jest.mock("ioredis", () => {
	return {
		Redis: jest.fn()
	}
})

describe("RedisService", () => {
	let service: RedisService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				{
					provide: getRedisToken("default"),
					useValue: {
						hmset: jest.fn(),
						hgetall: jest.fn(),
						zadd: jest.fn(),
						zrange: jest.fn()
					}
				},
				RedisService
			]
		})
			.useMocker((token) => {
				// Mock config service
				if (token === ExtendedConfigService) {
					return {
						get: jest.fn().mockImplementation((key) => {
							if (key === "redis.url") {
								return "redis://localhost:6379"
							}
						})
					}
				}
			})
			.compile()

		service = module.get<RedisService>(RedisService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
