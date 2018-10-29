import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';

import GrandMenu from './components/GrandMenu.vue';
import GroupList from './components/GroupMk/GroupList.vue';
import GroupListCheck from './components/GroupMk/GroupListCheck.vue';
import GroupMk from './components/GroupMk/GroupMk.vue';
import BackNumberMenu from './components/backnumber/BackNumberMenu.vue';
import BackNumber from './components/backnumber/BackNumber.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{ path: '/', component: GrandMenu},
		{ path: '/grouplist', component: GroupList },
		{ path: '/grouplistcheck', component: GroupListCheck },
		{ path: '/grandmenu', component: GrandMenu},
		{ path: '/groupmk', component: GroupMk},
		{ path: '/backnumbermenu', component: BackNumberMenu},
		{ path: '/backnumber/:id', name : 'backnumber', component: BackNumber},
	]
});

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')


