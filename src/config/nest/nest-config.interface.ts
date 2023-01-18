import { Environment } from "./environment.interface"

export interface NestOptions {
	env: Environment
	port: number
	corsOrigins: string[]
	authToken: string
}
