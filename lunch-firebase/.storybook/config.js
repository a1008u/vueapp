import { configure } from '@storybook/vue';

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  mode: "history",
  routes: [
    // { path: "/", component: GrandMenu },
    // { path: "/grandmenu", component: GrandMenu },
    // { path: "/groupmk", component: () => import("./pages/GroupMk.vue") },
    // {
    //   path: "/backnumbermenu",
    //   component: () => import("./pages/BackNumberMenu.vue")
    // },
    // {
    //   path: "/grouplist",
    //   component: () => import("./components/GroupMk/GroupList.vue")
    // },
    // {
    //   path: "/grouplistcheck",
    //   component: () => import("./components/GroupMk/GroupListCheck.vue")
    // },
    // {
    //   path: "/backnumber/:yearmonth",
    //   name: "backnumber",
    //   component: () => import("./components/backnumber/BackNumber.vue"),
    //   props: true
    // }
  ]
});


// buefyの設定を追加
import Vue from 'vue'
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

// storyの読み取り
const req = require.context('../src/stories', true, /.stories.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);