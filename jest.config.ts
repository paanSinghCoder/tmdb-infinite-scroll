module.exports = {
	testEnvironment: 'jsdom',
	preset: 'ts-jest',
	compilerOptions: {
		types: ['jest', 'jest-dom'],
		typeRoots: ['node_modules/@types', 'node_modules/@testing-library']
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy'
	}
}
