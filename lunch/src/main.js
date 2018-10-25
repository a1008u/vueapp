import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import GrandMenu from './components/GrandMenu.vue';
import GroupList from './components/GroupList.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{ path: '/', component: GrandMenu},
		{ path: '/grouplist', component: GroupList },
    { path: '/grandmenu', component: GrandMenu}
	]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
