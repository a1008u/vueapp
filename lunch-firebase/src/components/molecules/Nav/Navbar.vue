<template>
  <div>
    <nav class="container navbar" role="navigation" aria-label="main navigation">
      <div class='container'>
        <lunch-icon></lunch-icon>
        <navbar-item></navbar-item>
      </div>
    </nav>
  </div>
</template>

<script>
import NavbarItem from "@/components/atoms/Nav/NavbarItem"
import LunchIcon from "@/components/atoms/Icon/LunchIcon"

export default {
  name: 'Navbar',
  components:{
    NavbarItem: NavbarItem,
    LunchIcon: LunchIcon
  }
}
</script>

<style scoped>
.lunch{
  width: 70px;
  height: 70px;
}
</style>