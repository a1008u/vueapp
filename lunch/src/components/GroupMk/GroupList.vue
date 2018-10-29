<template>
  <div id="groupList">
    <ul v-for="(members, index) in  mkGroup" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'

export default {
  name: 'grouplist',
  data(){
    return {
      tempMembers:[],
      applicants:[]
    }
  },
  methods:{
   
  },
  computed:{
    mkGroup(){

      // 初期化
      if(this.applicants.length === 0) {
        importMembers.forEach(member => this.applicants.push(member))
      }

      let newMembers = [];
      let newGroup = [];
      let dabuleCkGroup = [];
      while(newMembers.length !== 10){

        console.log('--- start ---')

        // 新規グループ作成
        let random = Math.floor(Math.random() * this.applicants.length);
        if(this.applicants[random] === undefined) {
          return this.tempMembers;
        }

        let temp = this.applicants[random].name
        console.log(`target ${temp}`)
        if(newGroup.length === 0) {
          newGroup.push(temp)
          this.applicants.splice(random, 1);
          console.log(`newGroupの状態(start) ${newGroup}`)
        } else {

          console.log(`---- 重複確認 -----`)

          // 重複確認ロジック
          // 発見
          if(newGroup.length >= 1) {
            for(let group of this.$store.getters.members1) {
              for(let member of group) {
                if (newGroup.includes(member.name)){
                  group.forEach(tempMember =>{
                    if(tempMember.name !== member.name) {
                      dabuleCkGroup.push(tempMember.name);
                    }
                  });
                }
              }
            }
          }

          console.log(`dabuleCkGroup ${dabuleCkGroup}`)

          // 重複チェック
          if(dabuleCkGroup.length !== 0) {

            let ck = false;
            if(dabuleCkGroup.includes(temp)) {
              console.log('被り')
              dabuleCkGroup = [];
              ck = true;

              console.log(`newMembers.length ${newMembers.length}`)
              if(newMembers.length !== 0) {
                // 初期化
                newMembers = [];
                this.applicants = [];
                dabuleCkGroup = [];
                newGroup = [];
                importMembers.forEach(member => this.applicants.push(member))
                console.log(`newMembers.length(splice後) ${newMembers.length}`)
              }
            }

            if(!ck) {
              newGroup.some(i =>{
                console.log(`newGroupの確認  ${i}`)
                if(dabuleCkGroup.includes(i)) {
                  dabuleCkGroup = [];
                  ck = true;
                  return true;
                }
              })
            }

            if(!ck) {
              newGroup.push(temp)
              this.applicants.splice(random, 1);
              dabuleCkGroup = [];
            }

          } else {
            newGroup.push(temp)
            this.applicants.splice(random, 1);
            dabuleCkGroup = [];
          }

          console.log(`newGroupの状態(重複確認後) ${newGroup}`)

          if(newGroup.length === 4) {
            let tmp = [];
            newGroup.forEach(newMember => {
              tmp.push({name: newMember})
            })
            newMembers.push(tmp);
            dabuleCkGroup = [];
            newGroup = [];
          }
          console.log(`newGroupの状態 ${newGroup}`)
			  }
		  }
      console.table(newMembers)
      this.tempMembers = newMembers
      return newMembers;
	  }
  },
  async created(){
    await this.$store.dispatch('fetchMembers');
  }
};
</script>
