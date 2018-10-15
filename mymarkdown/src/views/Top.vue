<template>
<div id="top">
  <GlobalNav :user="userData"></GlobalNav>
  <Home v-if="!isLogin"></Home>
  <Editor v-if="isLogin" :user="userData"></Editor>
  <router-link :to="{ name: 'terms' }">利用規約</router-link>
</div>
</template>

<script>
import Home from "../components/Home.vue";
import Editor from "../components/Editer.vue";
import GlobalNav from '../components/GlobalNav.vue';

export default {
  name: "top",
  data() {
    return {
      isLogin: false,
      userData: null,
      isLoginChecked: false,
    };
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.isLoginChecked = true;
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  },
  components: {
    'Home': Home,
    'Editor': Editor,
    'GlobalNav': GlobalNav,
  }
};
</script>

<style lang="scss" scoped>
#top {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>