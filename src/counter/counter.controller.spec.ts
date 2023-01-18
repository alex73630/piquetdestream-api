import { Test, TestingModule } from "@nestjs/testing"
import { CounterController } from "./counter.controller"
import { CounterService } from "./counter.service"

describe("CounterController", () => {
	let controller: CounterController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CounterService],
			controllers: [CounterController]
		}).compile()

		controller = module.get<CounterController>(CounterController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})

	it("should return the current state", () => {
		expect(controller.getState()).toEqual({
			amount: expect.any(String),
			updatedAt: expect.any(Number)
		})
	})
})
