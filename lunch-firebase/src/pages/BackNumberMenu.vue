<template>
  <section  id="backnumbermenu" class="backnumbermenu">
    <!-- menu -->
    <!-- <div class="message-header">
      <router-link class="button is-info is-rounded" to="/">GrandMenu</router-link>
    </div> -->

    <backnumber-list></backnumber-list>
  </section >
</template>

<script>
import Firestore from "../util/Firestore";
import BacknumberList from '../components/organisms/Backnumber/BacknumberList.vue';

export default {
  name: 'backnumbermenu',
  data(){
    return {
    }
  },
  components:{
    BacknumberList: BacknumberList
  },
  props:[],
  methods:{
  },
  async mounted () {
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
.backnumbermenu{
  width: 45%;
  margin: 100px auto 0;
}
</style>
