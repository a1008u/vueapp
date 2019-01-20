import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";

import GrandMenu from "./pages/GrandMenu.vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  base: __dirname,
  mode: "history",
  routes: [
    { path: "/", component: GrandMenu },
    { path: "/grandmenu", component: GrandMenu },
    { path: "/groupmk", component: () => import("./pages/GroupMk.vue") },
    {
      path: "/backnumbermenu",
      component: () => import("./pages/BackNumberMenu.vue")
    },
    {
      path: "/grouplist",
      component: () => import("./components/GroupMk/GroupList.vue")
    },
    {
      path: "/grouplistcheck",
      component: () => import("./components/GroupMk/GroupListCheck.vue")
    },
    {
      path: "/backnumber/:yearmonth",
      name: "backnumber",
      component: () => import("./components/backnumber/BackNumber.vue"),
      props: true
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
