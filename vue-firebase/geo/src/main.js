import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  console.log('firebase auth done');
  if (!app) {
    console.log('app is null');
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})

