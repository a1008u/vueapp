<template>
  <section  id="backnumbermenu" class="backnumbermenu">
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
