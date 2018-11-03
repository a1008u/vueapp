<template>
  <div id="grandmenu">
    <router-link class="nav-link" to="/backnumbermenu">戻る</router-link>
    <div v-for="(members, index) in  this.group" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import { API_URL } from '../../constants';

export default {
  name: 'grandmenu',
  props:['targetGroup','yearmonth'],
  data(){
    return {
      tempMembers:[],
      group:[]
    }
  },
  async mounted() {
    let [year,month] = this.yearmonth.split('_');
    console.log(year)
    console.log(month)
    const {data} = await axios.get(`${API_URL}/${year}/${month}`);
    this.group = data.group;
    console.log(data);
  },
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>
