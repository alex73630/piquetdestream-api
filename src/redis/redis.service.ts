import { InjectRedis } from "@liaoliaots/nestjs-redis"
import { Injectable } from "@nestjs/common"
import { Redis } from "ioredis"
import { HelloAssoDonationPayload } from "../helloasso/interfaces/helloasso-donation.interface"
import { LiteDonationPayload } from "./interfaces/redis.interface"

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

	async addDonation(payload: HelloAssoDonationPayload) {
		return this.redisClient.zadd("donations", payload.amount, payload.id)
	}

	async addDonations(payload: HelloAssoDonationPayload[]) {
		const args = payload.reduce((acc, curr) => {
			acc.push(curr.amount, curr.id)
			return acc
		}, [])

		return this.redisClient.zadd("donations", ...args)
	}

	async getLiteDonations() {
		const payload = await this.redisClient.zrange("donations", 0, -1, "WITHSCORES")

		const donations: LiteDonationPayload[] = []
		for (let i = 0; i < payload.length; i += 2) {
			donations.push({
				id: parseInt(payload[i]),
				amount: parseFloat(payload[i + 1])
			})
		}

		return donations
	}

	async getDonation(id: number) {
		const payload = await this.redisClient.zscore("donations", id)

		if (!payload) return null

		return {
			id,
			amount: parseFloat(payload)
		}
	}

	async resetCounter() {
		await this.redisClient.del("counter")
		await this.redisClient.del("donations")
		await this.redisClient.del("lastDonationFetch")
	}

	async setLastDonationFetch(date: Date) {
		return this.redisClient.set("lastDonationFetch", date.toISOString())
	}

	async getLastDonationFetch() {
		const payload = await this.redisClient.get("lastDonationFetch")

		if (!payload) return null

		return new Date(payload)
	}

	async setAccessToken(token: string, expirationDate: Date) {
		return this.redisClient.set(
			"accessToken",
			token,
			"EX",
			Math.round((expirationDate.getTime() - Date.now()) / 1000)
		)
	}

	async getAccessToken() {
		return this.redisClient.get("accessToken")
	}

	async setRefreshToken(token: string, expirationDate: Date) {
		return this.redisClient.set(
			"refreshToken",
			token,
			"EX",
			Math.round((expirationDate.getTime() - Date.now()) / 1000)
		)
	}

	async getRefreshToken() {
		return this.redisClient.get("refreshToken")
	}
}
