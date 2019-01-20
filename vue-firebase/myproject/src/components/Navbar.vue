<template>
  <nav>
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a href="">Contact</a></li>
    </ul>
    <h2>User profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id }}">
          <span>User Profie {{ id }}</span>
        </router-link>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goHome">Redirect to Home</button></li>
      <li><button @click="goForward">Go Forward</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'Navbar',
  data() {
    return {
      userIds: ['1', '2', '3', '4']
    }
  },
  methods: {
    goHome(){
      this.$router.push({ name: 'Home' })
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      this.$router.go(1)
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


h1, h2 {
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
a.router-link-exact-active {
  color: purple;
}
</style>