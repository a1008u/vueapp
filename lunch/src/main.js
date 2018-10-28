import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';

import GrandMenu from './components/GrandMenu.vue';
import GroupList from './components/GroupList.vue';
import GroupListCheck from './components/GroupListCheck.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{ path: '/', component: GrandMenu},
		{ path: '/grouplist', component: GroupList },
		{ path: '/grouplistcheck', component: GroupListCheck },
    { path: '/grandmenu', component: GrandMenu}
	]
});

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')


