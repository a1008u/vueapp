import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "shitajicss/docs/css/shitaji.css";
import "./scss/style.scss";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyBgAIyHG0P6RXNdDg2HIFmEGSGrfAaCrwg",
  authDomain: "mymarkdown-84b57.firebaseapp.com",
  databaseURL: "https://mymarkdown-84b57.firebaseio.com",
  projectId: "mymarkdown-84b57",
  storageBucket: "",
  messagingSenderId: "248798651430"
}
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
