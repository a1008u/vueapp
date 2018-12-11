<template>
  <div id="app">
    <navbar />

    <section class="section">
      <div class="container">
        <div class="notification">
          <router-view></router-view>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';

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

</style>
