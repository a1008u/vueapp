<template>
  <div id="grandmenu">
    <div v-for="(members, index) in  this.targetGroup" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'

export default {
  name: 'grandmenu',
  data(){
    return {
      tempMembers:[],
    }
  },
  props:['targetGroup'],
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>
