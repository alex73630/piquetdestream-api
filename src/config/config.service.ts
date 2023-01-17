import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class ExtendedConfigService extends ConfigService<Record<string, unknown>, true> {}
