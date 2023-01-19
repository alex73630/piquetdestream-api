import { Module } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { DatabaseService } from "./database.service"

@Module({
	providers: [DatabaseService, PrismaService],
	exports: [DatabaseService]
})
export class DatabaseModule {}
