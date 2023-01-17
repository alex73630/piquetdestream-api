/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest"
import type { OpenAPIConfig } from "./core/OpenAPI"
import { AxiosHttpRequest } from "./core/AxiosHttpRequest"

import { CheckoutIntentsManagementService } from "./services/CheckoutIntentsManagementService"
import { DirectoryService } from "./services/DirectoryService"
import { FormsService } from "./services/FormsService"
import { OrdersItemsService } from "./services/OrdersItemsService"
import { OrganizationVisualisationService } from "./services/OrganizationVisualisationService"
import { PartnerManagementService } from "./services/PartnerManagementService"
import { PaymentsManagementService } from "./services/PaymentsManagementService"
import { UsersService } from "./services/UsersService"
import { ValuesDefinitionsService } from "./services/ValuesDefinitionsService"

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest

export class HelloAssoApi {
	public readonly checkoutIntentsManagement: CheckoutIntentsManagementService
	public readonly directory: DirectoryService
	public readonly forms: FormsService
	public readonly ordersItems: OrdersItemsService
	public readonly organizationVisualisation: OrganizationVisualisationService
	public readonly partnerManagement: PartnerManagementService
	public readonly paymentsManagement: PaymentsManagementService
	public readonly users: UsersService
	public readonly valuesDefinitions: ValuesDefinitionsService

	public readonly request: BaseHttpRequest

	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
		this.request = new HttpRequest({
			BASE: config?.BASE ?? "https://api.helloasso.com/v5",
			VERSION: config?.VERSION ?? "5",
			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
			CREDENTIALS: config?.CREDENTIALS ?? "include",
			TOKEN: config?.TOKEN,
			USERNAME: config?.USERNAME,
			PASSWORD: config?.PASSWORD,
			HEADERS: config?.HEADERS,
			ENCODE_PATH: config?.ENCODE_PATH
		})

		this.checkoutIntentsManagement = new CheckoutIntentsManagementService(this.request)
		this.directory = new DirectoryService(this.request)
		this.forms = new FormsService(this.request)
		this.ordersItems = new OrdersItemsService(this.request)
		this.organizationVisualisation = new OrganizationVisualisationService(this.request)
		this.partnerManagement = new PartnerManagementService(this.request)
		this.paymentsManagement = new PaymentsManagementService(this.request)
		this.users = new UsersService(this.request)
		this.valuesDefinitions = new ValuesDefinitionsService(this.request)
	}
}
