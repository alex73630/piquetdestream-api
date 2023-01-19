import { Test, TestingModule } from "@nestjs/testing"
import { PrismaService } from "../prisma.service"
import { DatabaseService } from "./database.service"

// Mock the PrismaService
jest.mock("../prisma.service", () => ({
	PrismaService: jest.fn().mockImplementation(() => ({
		donation: {
			create: jest.fn().mockImplementation(() => ({
				amount: 10,
				createdAt: "2020-01-01T00:00:00.000Z",
				id: "123456789",
				message: "Hello world",
				name: "John Doe"
			})),
			createMany: jest.fn().mockImplementation(() => [
				{
					amount: 10,
					createdAt: "2020-01-01T00:00:00.000Z",
					id: "123456789",
					message: "Hello world",
					name: "John Doe"
				}
			]),
			findMany: jest.fn().mockImplementation(() => [
				{
					amount: 10,
					createdAt: "2020-01-01T00:00:00.000Z",
					id: "123456789",
					message: "Hello world",
					name: "John Doe"
				}
			])
		}
	}))
}))

describe("DatabaseService", () => {
	let service: DatabaseService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DatabaseService, PrismaService]
		}).compile()

		service = module.get<DatabaseService>(DatabaseService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
