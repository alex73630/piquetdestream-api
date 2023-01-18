import { InjectRedis } from "@liaoliaots/nestjs-redis"
import { Injectable } from "@nestjs/common"
import { Redis } from "ioredis"
import { DonationPayload } from "./interfaces/redis.interface"

@Injectable()
export class RedisService {
	constructor(@InjectRedis() private readonly redisClient: Redis) {}

	async setCounterValue(amount: number) {
		return this.redisClient.hmset("counter", {
			a: amount,
			u: Date.now()
		})
	}

	async getCounterValue() {
		const payload = await this.redisClient.hgetall("counter")

		return {
			amount: parseFloat(payload.a),
			updatedAt: parseInt(payload.u)
		}
	}

	async addDonation(payload: DonationPayload) {
		return this.redisClient.zadd("donations", payload.amount, payload.id)
	}

	async getDonations() {
		const payload = await this.redisClient.zrange("donations", 0, -1, "WITHSCORES")

		const donations: DonationPayload[] = []
		for (let i = 0; i < payload.length; i += 2) {
			donations.push({
				id: parseInt(payload[i]),
				amount: parseFloat(payload[i + 1])
			})
		}

		return donations
	}

	async resetCounter() {
		await this.redisClient.del("counter")
		await this.redisClient.del("donations")
	}
}
