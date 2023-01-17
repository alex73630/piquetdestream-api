module.exports = {
	// Run type-check on changes to TypeScript files
	"(src|apps|libs|test)/**/*.ts?(x)": () => "npm run type-check",
	// Run ESLint on changes to JavaScript/TypeScript files
	"(src|apps|libs|test)/**/*.(ts|js)?(x)": (/** @type {string[]} */ filenames) => [
		`npx prettier --write ${filenames.join(" ")}`,
		`npx eslint --fix ${filenames.join(" ")}`
	]
}
