import Vue from 'vue';
import Vuex from 'vuex';
import groupList1 from './GroupList.1';
import groupList2 from './GroupList.2';
import groupList3 from './GroupList.3';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		groupList1,
		groupList2,
		groupList3
	}
});
