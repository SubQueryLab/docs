import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#e0ff57', 400: '#b8df0c', 600: '#5d7300', 900: '#2c3800', 950: '#1f2800' };
const gray = { 100: '#f6f6f8', 200: '#ecedf1', 300: '#c0c2c7', 400: '#898b94', 500: '#565860', 700: '#363840', 800: '#25262e', 900: '#17181b' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};