<template>
  <div id='LunchIcon' class="navbar-brand">
    <router-link class="navbar-brand" to="/">
      <img src="./lunch.png" class="lunch" alt="Have Fun Lunch" >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LunchIcon'
}
</script>

<style scoped>
.lunch{
  width: 70px;
  height: 70px;
}
</style>