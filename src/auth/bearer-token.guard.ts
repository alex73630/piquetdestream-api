import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common"
import { Observable } from "rxjs"
import { ExtendedConfigService } from "../config/config.service"
import { NestOptions } from "../config/nest/nest-config.interface"

@Injectable()
export class BearerTokenAuthGuard implements CanActivate {
	constructor(private readonly configService: ExtendedConfigService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()
		const authHeader = request.headers.authorization

		if (!authHeader) {
			return false
		}

		const [bearer, token] = authHeader.split(" ")

		const authToken = this.configService.get<NestOptions["authToken"]>("nest.authToken")

		if (bearer !== "Bearer" || token !== authToken) {
			return false
		}

		return true
	}
}
