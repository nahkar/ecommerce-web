module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'generated'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint/eslint-plugin'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	},
};
