<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-brand" to="/">
          <img src="./lunch.png" class="lunch" alt="Bulma: a modern CSS framework based on Flexbox" >
        </router-link>
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">home</router-link>
        <router-link class="navbar-item" to="/groupmk">New Group</router-link>
        <router-link class="navbar-item" to="/backnumbermenu">BackNumber</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.lunch{
  width: 70px;
  height: 70px;
}
</style>