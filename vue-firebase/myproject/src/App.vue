<template>
  <div id="app">
    <Navbar />

    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends"/>

    <Blogs />

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AllFriends from  './components/AllFriends'
import OnlineFriends from  './components/OnlineFriends'
import Blogs from './components/Blogs'

export default {
  name:"app",
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data(){
    return {
      title: 'My first Vue app, wooo :)',
      friends: [
        { name: 'Mario', online: true },
        { name: 'Luigi', online: false },
        { name: 'Toad', online: true },
        { name: 'Bowser', online: false }
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>
>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
