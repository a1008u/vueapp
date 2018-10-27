import Vue from 'vue';
import Vuex from 'vuex';
import groupList from './GroupList';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    groupList
	}
});
