<template>
  <div id="groupList">
    <button @click="fix()">編集</button>
    <button @click="ck()">重複確認</button>

    <div v-for="(members, index) in  mkGroup" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
        <div v-if="modeFix">
          <textarea v-model="member.name"></textarea>
        </div>
      </div>

      <div v-if="out.length !== 0">
          {{out[index]}}
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../group/member.js'

export default {
  name: 'grouplist',
  data(){
    return {
      tempMembers:[],
      applicants:[],
      out :[],
      modeFix :false
    }
  },
  methods:{
    fix(){
      this.modeFix = true;
    },
    ck(){
      const mkCkGroups = () => {
        let ckGroups = [];
        let ckMembers = [];
        this.tempMembers.forEach(members => {
          members.forEach(member => {
            if (ckMembers.length === 3) {
              ckMembers.push(member.name);
              ckGroups.push(ckMembers);
              ckMembers = [];
            }
            else {
              ckMembers.push(member.name);
            }
          });
        });
        return ckGroups
      }

      const mkDabuleCkGroupList = (ckGroups) => {
        let dabuleCkGroupList = [];
        let dabuleCkGroup = [];
        for (let members of ckGroups) {
          for (let group of this.$store.getters.members) {
            for (let member of group) {
              if (members.includes(member.name)) {
                group.forEach(tempMember => {
                  if (tempMember.name !== member.name) {
                    dabuleCkGroup.push(tempMember.name);
                  }
                });
              }
            }
          }
          dabuleCkGroupList.push(dabuleCkGroup);
          dabuleCkGroup = [];
        }
        return dabuleCkGroupList
      }

      const mkOutGroup = (ckGroups, dabuleCkGroupList) => {
        let outGroup = [];
        let outMember = [];
        ckGroups.forEach((members, index) => {
          console.log(members);
          console.log(dabuleCkGroupList[index]);
          members.forEach(member => {
            if (dabuleCkGroupList[index].includes(member)) {
              outMember.push(member);
            }
          });
          outGroup.push(outMember);
          outMember = [];
        });
        return outGroup;
      }

      // mainロジック --------------------------------------
      this.modeFix = false;

      // 検索対象変形
      const ckGroups = mkCkGroups();
      console.log(ckGroups);

      // チェック
      const dabuleCkGroupList = mkDabuleCkGroupList(ckGroups);
      console.log(dabuleCkGroupList);

      // 該当箇所を抽出
      const outGroup = mkOutGroup(ckGroups, dabuleCkGroupList);
      this.out = outGroup;
      console.log(outGroup);

    }
  },
  computed:{
    mkGroup(){

      if(this.applicants.length === 0) {
        importMembers.forEach(member => this.applicants.push(member))
      }

      let newMembers=[];
      let group = [];
      let newMember = [];
      while(newMembers.length !== 10){
        if(group.length !== 4) {
          let random = Math.floor(Math.random() * this.applicants.length);
          newMember = this.applicants.splice(random, 1);
          group.push({name: newMember[0].name})
        } else {
          newMembers.push(group);
          newMember = [];
          group = [];
        }
      }
      this.tempMembers = newMembers;
      return newMembers;
	  }
  },
  async created(){
    await this.$store.dispatch('fetchMembers');
  }
};
</script>
