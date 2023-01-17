module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module"
	},
	plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
	extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"prettier/prettier": ["error", {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ args: "after-used", ignoreRestSiblings: true, argsIgnorePattern: "^_" }
		],
		"no-unused-vars": ["warn", { args: "after-used", ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
		"no-multi-spaces": "error",
		"no-trailing-spaces": "error",
		"arrow-spacing": "error"
	}
}
