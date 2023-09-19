import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { name } from './package.json'
import libCss from 'vite-plugin-libcss';


export default defineConfig({
	build: {
		cssCodeSplit: true,
		emptyOutDir: true,
		lib: {
			name,
			entry: ['./src/index.ts'],
			fileName: f => `index.${f}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [Vue(), Unocss(),libCss()]
})
