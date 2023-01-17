import { ValidationError } from "@nestjs/common"
import { ClassConstructor, plainToClass } from "class-transformer"
import { validateSync } from "class-validator"

export function ConfigValidate(
	config: Record<string, unknown>,
	classes: ClassConstructor<any>[]
): Record<string, unknown> {
	let validatedConfig: Record<string, unknown> = {}
	const errors: ValidationError[] = []

	for (let index = 0; index < classes.length; index++) {
		const cls = classes[index]

		const parsed = parseConfig(cls, config)

		errors.push(...validateSync(parsed, { skipMissingProperties: false }))

		validatedConfig = { ...validatedConfig, ...parsed }
	}

	if (errors.length > 0) {
		throw new Error(errors.toString())
	}

	return validatedConfig
}
function parseConfig<T>(cls: ClassConstructor<T>, config?: Record<string, unknown>) {
	return plainToClass(cls, config || process.env, { excludeExtraneousValues: true, exposeUnsetFields: false })
}
