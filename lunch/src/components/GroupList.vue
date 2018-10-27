<template>
  <div id="groupList">
    <ul v-for="(members, index) in members" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
    </ul>
  </div>
</template>

<script>
import {members} from '../group/member.js'
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
  name: 'grouplist',
  data(){
    return {
      tempMembers:[],
    }
  },
  computed:{
    ...mapGetters(['members']),
    // mkGroup(){
    //   let newMembers=[];
    //   let copyMs = []
    //   members.forEach(m => {
    //     copyMs.push(m);
    //   })
    //   console.table(copyMs)

    //   // 過去分取得
    //   let pastGroup = this.$store.getters.members;
    //   let group = [];
    //   let mem = [];
    //   let tempG = []
    //   while(newMembers.length !== 10){

    //     if(group.length !== 4) {
    //       let random = Math.floor(Math.random() * copyMs.length);
    //       let index = -1;

    //       if (pastGroup.length !== 0) {
    //         let v = pastGroup.length
    //         for (let i = 0; i<v; i++) {
    //           console.log(' ===== ')
    //           pastGroup[i].find(m => {
    //             if(m.name === copyMs[random].name) {
    //               index = i;
    //             }
    //           })

    //           if (index !== -1) {
    //             break;
    //           }
    //         }

    //         if(index !== -1) {
    //           let pG = pastGroup[index];
    //           for(let g of pG) {
    //             tempG.push(g.name);
    //           }
    //         }
    //       }

    //       if(tempG.length === 0) {
    //           mem = copyMs.splice(random, 1);
    //           if(mem[0]) {
    //             group.push(mem[0].name)
    //           }
    //       } else {
    //         group.concat(tempG).forEach(i =>{
    //           if(group.includes(i) && tempG.includes(i)) {
    //             console.log(group.includes(i) + " " + tempG.includes(i))
    //           } else {
    //             mem = copyMs.splice(random, 1);
    //             if(mem[0]) {
    //               group.push(mem[0].name)
    //             }
    //           }
    //         })
    //       }
    //     } else {
    //       let gs = [];
    //       group.forEach(g => {
    //         gs.push({name: g})
    //       })
    //       newMembers.push(gs);
    //       mem = [];
    //       group = [];
    //     }
    //   }

    //   this.tempMembers = newMembers;
    //   return newMembers;
    // }
  },
  created(){
    this.$store.dispatch('fetchMembers');
  }
};
</script>
