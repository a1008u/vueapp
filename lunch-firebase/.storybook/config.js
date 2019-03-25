import Vue from 'vue'
import { configure } from '@storybook/vue';
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";


Vue.use(VueRouter);
const router = new VueRouter({
  base: __dirname,
  mode: "history",
  // routes: [
  //   // { path: "/", component: GrandMenu },
  //   // { path: "/grandmenu", component: GrandMenu },
  //   { path: "/groupmk", component: () => import("../src/pages/GroupMk.vue")},
  //   {
  //     path: "/backnumbermenu",
  //     component: () => import("../src/pages//BackNumberMenu.vue")
  //   },
  //   {
  //     path: "/backnumber/:yearmonth",
  //     name: "backnumber",
  //     component: () => import("../src/pages//BacknumberContents.vue"),
  //     props: true
  //   }
  // ]
});

// buefyの設定を追加
Vue.use(Buefy);

// storyの読み取り
const req = require.context('../src/stories', true, /.stories.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);