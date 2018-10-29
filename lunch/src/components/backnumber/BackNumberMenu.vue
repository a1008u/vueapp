<template>
  <div id="grandmenu">
    <div v-for="(group, index) in groups" :key="index">
      <div v-if="g[group -1][group]">
        <BackNumber :targetGroup='mkGroup(group)'></BackNumber>
      </div>
      <div v-else>
        <button @click="change(group)"> group {{group}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import BackNumber from './BackNumber.vue';

export default {
  name: 'grandmenu',
  data(){
    return {
      groups:[1,2,3],
      groupState: false,
      g:[
        {"1":false},
        {"2":false},
        {"3":false},
      ]
    }
  },
  components:{
    BackNumber: BackNumber
  },
  props:['selectedTotalGroupNum','selectedGroupNum'],
  methods:{
    mkGroup(group){
      if(group === 1) {
        return this.$store.getters.members1;
      } else if(group === 2) {
        return this.$store.getters.members2;
      } else {
        return this.$store.getters.members3;
      }
    },
    change(group){

      this.groups.forEach(index => {
        this.g[index -1][index] = false;
      });

      this.g[group -1][group] = true;
      this.groupState = !this.groupState;
    }
  },
  computed:{
  },
  async created(){
    await this.$store.dispatch('fetchMembers1');
    await this.$store.dispatch('fetchMembers2');
    await this.$store.dispatch('fetchMembers3');
  }
};
</script>
