import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from '@/lib/moment/moment.min.js'
import storage from '@/common/storage/index.js'
import utils from '@/utils'
import * as filters from '@/common/filters'
import appConfig from '@/common/config/config'
import i18n from '@/common/i18n/i18n'

// 引入 Bootstrap & jQuery
// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap';
import '@/styles/custom-bootstrap.scss'
// 引入 vue-meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// 引入进度条组件
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
	color: 'darkorange',
	failedColor: 'orangered',
	height: '2px',
})
import VueClipboard from 'vue-clipboard2' // 剪切板
Vue.use(VueClipboard);
// 引入toast组件
// github：https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted'
Vue.use(Toasted, {
	position: 'top-center',
	duration: 2000,
	iconPack: 'custom-class',
})

// 自定义表单验证组件
import SwForm from '@/components/common/swForm/swForm'
import SwFormItem from '@/components/common/swForm/swFormItem'
import SwSelect from '@/components/common/swForm/swSelect'
import SwInput from '@/components/common/swForm/swInput'
Vue.component('sw-form', SwForm)
Vue.component('sw-form-item', SwFormItem)
Vue.component('sw-select', SwSelect)
Vue.component('sw-input', SwInput)

// 添加全局过滤器
let filterObj = {} // 全局filter obj
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
	filterObj[key] = filters[key]
})

// 扩展vue原型属性
prototypeEx(Vue)
// 扩展Vue原型
function prototypeEx(Vue) {
	// vue prototype 扩展
	Vue.prototype.$moment = moment // 加入 moment使用
	Vue.prototype.$storage = storage // 用于存储
	Vue.prototype.$utils = utils // 帮助类
	Vue.prototype.$filter = filterObj // 全局过滤
	Vue.prototype.$appConfig = appConfig // app配置
}

Vue.config.productionTip = false

const vm = new Vue({
	i18n,
	router,
	data() {
		return {
			title: '',
			titleTemplate: '',
			keywords: '',
			description: '',
		}
	},
	metaInfo() {
		return {
			title: this.$store.state.metaInfo.title,
			meta: [{
					name: 'keywords',
					content: this.$store.state.metaInfo.keywords,
				},
				{
					name: 'description',
					content: this.$store.state.metaInfo.description,
				},
			],
		}
	},
	store,
	render: (h) => h(App),
	...App,
}).$mount('#app')

export default vm
