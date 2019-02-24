<template>
  <section  id="grandmenu" class="grandmenu">
      <menu-set class='container'></menu-set>
  </section >
</template>

<script>
import db from "@/firebase/init";
import Firestore from "../util/Firestore";

import MenuSet from "@/components/molecules/Menu/MenuSet.vue"

export default {
  name: 'grandmenu',
  components:{
    MenuSet:MenuSet
  },
  created: async function(){

    // let testName = await Firestore.getFireStore("test", "part1");
    // console.log(testName)
    // console.log(testName.data())
  }
};
</script>

<style scoped>
.grandmenu{
  height: 100vh;
}
.container{
  top: 30%;
}
</style>
