/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
	collectCoverageFrom: [
		"src/web/components/HeadContent/*.(ts|tsx)",
		"src/web/pages/**/*.(ts|tsx)",
	],
	clearMocks: true,
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.jest.json",
		},
	},
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
	setupFiles: ["<rootDir>/src/web/tests/setup.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
	},
	testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/.next"],
	testRegex: ".*\\.spec\\.(ts|tsx)$",
	/*
	 * CoverageThreshold: {
	 * 	global: {
	 * 		branches: 100,
	 * 		functions: 100,
	 * 		lines: 100,
	 * 		statements: 100,
	 * 	},
	 * },
	 */
};
