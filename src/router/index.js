import Vue from 'vue'
import VueRouter from 'vue-router'
import context from "@/main.js";
import store from '@/store'
import {
	metaInfo
} from '@/utils/const'

function loadView(component) {
	// [request]表示实际解析的文件名
	return () =>
		import( /* webpackChunkName: "[request]" */ `@/views/${component}`)
}

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "/about",
	},
	{
		path: "/about",
		name: "about",
		component: loadView("About"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "About",
			},
			isBaiduCount: false,
			requireAuth: false,
		},
	},
	{
		path: "/product",
		name: "product",
		component: loadView("Product"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "Product",
			},
			isBaiduCount: false,
			requireAuth: false,
		},
	},
	{
		path: "/partner",
		name: "partner",
		component: loadView("Partner"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "Partner",
			},
			isBaiduCount: false,
			requireAuth: false,
		},
	},
	{
		path: "/faq",
		name: "faq",
		component: loadView("Faq"),
		meta: {
			metaInfo: {
				...metaInfo,
				title: "FAQ",
			},
			isBaiduCount: false,
			requireAuth: false,
		},
	},
	{
		path: "*",
		redirect: "/about",
	},
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};

router.beforeEach((to, from, next) => {
	// 设置页面meta标签信息
	if (to.meta.metaInfo) store.commit('CHANGE_META_INFO', to.meta.metaInfo)
	if (to.name == 'null') return
	// 监听路由，改变当前导航栏高亮状态
	store.commit('CHANGE_CUR_ROUTE_NAME', to.name)
	next();

	// 路由变化后滚动到顶部
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

// 全局路由后置守卫
router.afterEach((to, from) => {
	// 控制页面加入百度统计 统计的需要关联当前门店的ID
	//if (to.meta && to.meta.isBaiduCount) falseVue.prototype.$utils.baiduPageView(to.path);
})

export default router
