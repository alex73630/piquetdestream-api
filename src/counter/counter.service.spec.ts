import { Test, TestingModule } from "@nestjs/testing"
import { CounterService } from "./counter.service"
import { ModuleMocker, MockFunctionMetadata } from "jest-mock"
import { RedisService } from "../redis/redis.service"

const moduleMocker = new ModuleMocker(global)

describe("CounterService", () => {
	let service: CounterService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CounterService]
		})
			.useMocker((token) => {
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

		service = module.get<CounterService>(CounterService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
