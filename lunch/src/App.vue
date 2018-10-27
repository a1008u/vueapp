<template>
  <div id="app">
    <navbar />
    <img alt="Vue logo" src="./assets/logo.png">

    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  data(){
    return {
      newMembers:[]
    }
  },
  components:{
    Navbar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
