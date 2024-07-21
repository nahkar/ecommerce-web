import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.VITE_SERVER_URL,
	documents: './src/**/*.ts',
	generates: {
		'src/generated/graphql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			config: {
				withHooks: true,
			},
		},
	},
};

export default config;
