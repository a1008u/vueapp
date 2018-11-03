<template>
  <div>
    <!-- <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link class="navbar-brand" to="/">Home</router-link>
    </nav> -->

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-brand" to="/">
          <img src="./lunch.png" class="lunch" alt="Bulma: a modern CSS framework based on Flexbox" >
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
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