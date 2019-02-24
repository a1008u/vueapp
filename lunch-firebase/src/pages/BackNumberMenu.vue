<template>
  <section  id="backnumbermenu" class="backnumbermenu">
    <article class="container message">
      <!-- menu -->
      <div class="message-header">
        <router-link class="button is-info is-rounded" to="/">GrandMenu</router-link>
      </div>

      <br />

      <div class="box"  v-for="(data, index) in total" :key="index">
        <div class="columns is-mobile is-centered">
          <div class="tag is-info is-large">{{data.targetyear}}</div>
          <ul class="pagination-list" v-for="(month, index) in data.totalmonth" :key="index">
            <li>
              <router-link
                class="button is-primary is-outlined pagination-link"
                :to="{ name : 'backnumber', params : { yearmonth:`${data.targetyear}_${month}`}}">
                {{month}}月
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </article>
  </section >
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import BackNumber from '../components/backnumber/BackNumber.vue';
import { API_URL } from '../constants';
import db from "@/firebase/init";
import Firestore from "../util/Firestore";

export default {
  name: 'backnumbermenu',
  data(){
    return {
      groups:[1,2,3],
      groupState: false,
      total:[],
    }
  },
  components:{
    BackNumber: BackNumber
  },
  props:['selectedTotalGroupNum','selectedGroupNum'],
  methods:{
  },
  async mounted () {
    const groupTotal = await Firestore.getFireStore("group", "total");
    this.total = groupTotal.data().target;
    console.log(this.total);
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
a{
  text-decoration:none;
}
.backnumbermenu{
  height: 90vh;
}
.container{
  top: 10%;
}
</style>
