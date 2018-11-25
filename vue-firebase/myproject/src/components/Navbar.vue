<template>
  <nav>
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'Navbar',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
nav{
  text-align: center;
}
nav ul{
  padding: 0;
}
nav li{
  display: inline-block;
  list-style-type: none;
  margin: 10px;
}
</style>