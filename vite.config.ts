import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@widgets': path.resolve(__dirname, 'src/widgets'),
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		port: 5454,
		strictPort: true,
	},
});
