import Vue from 'vue'
import Vuex from 'vuex'
import {
	metaInfo
} from '@/utils/const'
import storage from "@/common/storage/storage";
Vue.use(Vuex)

const state = {
	metaInfo,
	curRouteName: 'about', // 当前路由名称
	lang: storage.getItem('lang') || 'zh', // 当前语言
};

const mutations = {
	CHANGE_META_INFO(state, metaInfo) {
		state.metaInfo = {
			...state.metaInfo,
			...metaInfo
		};
	},
	CHANGE_CUR_ROUTE_NAME(state, curRouteName) {
		state.curRouteName = curRouteName;
	},
	CHANGE_LANG(state, lang) {
		storage.remove('lang');
		if (lang) storage.set('lang', lang);
		state.lang = lang;
	},
};

export default new Vuex.Store({
	state,
	mutations,
	actions: {},
	modules: {}
})
