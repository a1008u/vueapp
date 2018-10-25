<template>
  <div id="groupList">
    <ul v-for="(members, index) in mkGroup" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
    </ul>
  </div>
</template>

<script>
import {members} from '../member.js'
export default {
  name: 'grouplist',
  data(){
    return {
      tempMembers:[]
    }
  },
  computed:{
    mkGroup(){
      let newMembers=[];
      let ms = []
      members.forEach(m => {
        ms.push(m);
      })

      let group = [];
      let mem = [];
      while(newMembers.length !== 10){
        if(group.length !== 4) {
          let random = Math.floor(Math.random() * ms.length);
          mem = ms.splice(random, 1);
          group.push({name: mem[0].name})
        } else {
          newMembers.push(group);
          mem = [];
          group = [];
        }
      }

      this.tempMembers = newMembers;
      return newMembers;
    }
  }
};
</script>
