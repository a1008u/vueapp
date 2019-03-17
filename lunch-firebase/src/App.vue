<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/molecules/Nav/Navbar';

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

<style scoped>

</style>

