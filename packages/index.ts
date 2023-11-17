import { App } from 'vue'
import ExTable from './components/ExTable/index.vue'

export { ExTable }

const components = [ExTable]

// 完整引入组件
const install = function (app: App) {
	components.forEach(component => {
		app.use(component as unknown as { install: () => any })
	})
}

export default {
	install,
}
