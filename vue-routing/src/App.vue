<template>
  <div>
    <!-- header要素(navを表示) -->
    <navbar />
    <main role="main" class="container">
      <!-- 表示内容 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    name: 'app',
    components:{
        Navbar
    }
};
</script>