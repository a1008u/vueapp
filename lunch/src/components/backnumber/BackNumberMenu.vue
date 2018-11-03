<template>
  <div id="grandmenu">
    <div v-for="(data, index) in total" :key="index">

      <h2 class="title">{{data.targetyear}}</h2>
      
      <div v-for="(month, index) in data.totalmonth" :key="index">
        <div class="columns is-mobile">
          <div class="column is-2 is-offset-4">
            <router-link  
              class="tag is-info is-large"
              :to="{ name : 'backnumber', params : { yearmonth:`${data.targetyear}_${month}`}}">
              {{month}}月
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import BackNumber from './BackNumber.vue';
import { API_URL } from '../../constants';

export default {
  name: 'grandmenu',
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
