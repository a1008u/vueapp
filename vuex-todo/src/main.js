import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {state, mutations, actions, getters} from './store';

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
