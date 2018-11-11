<template>
  <div id="grandmenu">

  <article class="message">
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

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import BackNumber from './BackNumber.vue';
import { API_URL } from '../../constants';

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
    const {data} = await axios.get(`${API_URL}/total`);
    this.total = data;
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
</style>
