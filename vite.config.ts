import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
});
