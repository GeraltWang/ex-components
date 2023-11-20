import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			script: {
				// 开启defineModel
				defineModel: true,
				// propsDestructure: true,
			},
		}),
		vueJsx(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		dts({
			// 输出目录
			outDir: ['lib/types'],
			// 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
			staticImport: true,
			// 将所有的类型合并到一个文件中
			rollupTypes: true,
		}),
	],
	resolve: {
		// https://cn.vitejs.dev/config/#resolve-alias
		alias: {
			// 设置路径
			'~': path.resolve(__dirname, './'),
			// 设置别名
			'@': path.resolve(__dirname, './src'),
		},
		// https://cn.vitejs.dev/config/#resolve-extensions
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	build: {
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, './packages/index.ts'),
			name: 'ExComponents',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['vue', 'element-plus', '@element-plus/icons-vue'],
			output: {
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
			},
		},
	},
})
