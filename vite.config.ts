import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		proxy: {
			'/api': {
				target: 'http://6f61c7d6.r28.cpolar.top', // 目标服务  
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			}
		}
	}
})