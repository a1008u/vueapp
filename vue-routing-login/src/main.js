import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Dashboard from './components/dashboard/Dashboard.vue';
import AuthForm from './components/auth/AuthForm.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const requiresAuth = (to, from, next) => {
  const user = localStorage.getItem('user');
  if(user) {
    next();
  } else {
    next({path :'/'})
  }
};

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{
			path: '/',
			component: AuthForm
		},
		{
			path: '/dashboard',
      component: Dashboard,
      beforeEnter: requiresAuth
			//require auth here only authenticated user
			//can access the dashboard route
		}
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');