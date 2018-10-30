<template>
  <div id="groupList">
    <div v-if="buttonState">
      <button @click="confirm">入力し直す</button>
      <button @click="save()">保存</button>
    </div>
    <div v-else>
      <button @click="fix()">編集</button>
      <button @click="ck()">重複確認</button>
      <button @click="confirm()">確認</button>
    </div>

    <div v-if="viewContents">
      登録完了<br />
      <router-link class="navbar-brand" to="/">Home</router-link>
    </div>
    <div v-else>
      <div v-for="(members, index) in  mkGroup" :key='index'>
        <div v-for="(member, index) in members" :key='index'>
          {{member.name}}
          <div v-if="modeFix">
            <textarea v-model="member.name"></textarea>
          </div>
        </div>

        <div v-if="out1.length !== 0">
          1回目 {{out1[index]}}
        </div>
        <div v-if="out2.length !== 0">
          2回目 {{out2[index]}}
        </div>
        <div v-if="out3.length !== 0">
          3回目 {{out3[index]}}
        </div>
        <br />
      </div>
    </div>
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
      applicants:[],
      out1 :[],
      out2 :[],
      out3 :[],
      modeFix :false,
      buttonState:false,
      viewContents:false,
    }
  },
  props:['selectedTotalGroupNum','selectedGroupNum','csvText'],
  methods:{
    fix(){
      this.modeFix = true;
    },
    confirm(){
      this.buttonState = !this.buttonState;
    },
    save(){
      this.viewContents = !this.viewContents;
    },
    ck(){
      console.log(' -------- ')
      console.log(this.$store.getters.members1)

      const mkCkGroups = () => {
        let ckGroups = [];
        let ckMembers = [];
        this.tempMembers.forEach(members => {
          members.forEach(member => {
            if (ckMembers.length === (this.selectedGroupNum -1)) {
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

      const mkDabuleCkGroupList = (ckGroups, storeMembers) => {
        let dabuleCkGroupList = [];
        let dabuleCkGroup = [];
        for (let members of ckGroups) {
          for (let group of storeMembers) {
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
      const dabuleCkGroupList1 = mkDabuleCkGroupList(ckGroups, this.$store.getters.members1);
      const dabuleCkGroupList2 = mkDabuleCkGroupList(ckGroups, this.$store.getters.members2);
      const dabuleCkGroupList3 = mkDabuleCkGroupList(ckGroups, this.$store.getters.members3);
      console.log('------------------');
      console.log(dabuleCkGroupList1);
      console.log(dabuleCkGroupList2);
      console.log(dabuleCkGroupList3);

      // 該当箇所を抽出
      const outGroup1 = mkOutGroup(ckGroups, dabuleCkGroupList1);
      const outGroup2 = mkOutGroup(ckGroups, dabuleCkGroupList2);
      const outGroup3 = mkOutGroup(ckGroups, dabuleCkGroupList3);
      this.out1 = outGroup1;
      this.out2 = outGroup2;
      this.out3 = outGroup3;
      console.log('------------------');
      console.log(outGroup1);
      console.log(outGroup2);
      console.log(outGroup3);

    }
  },
  computed:{
    mkGroup(){

      if(this.applicants.length === 0) {
        this.csvText.forEach(member => this.applicants.push(member))
      }

      let newMembers=[];
      let group = [];
      let newMember = [];
      while(newMembers.length !== this.selectedTotalGroupNum){
        
        if(group.length !== this.selectedGroupNum) {
          let random = Math.floor(Math.random() * this.applicants.length);
          newMember = this.applicants.splice(random, 1);
          group.push({name: newMember[0]})
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
    await this.$store.dispatch('fetchMembers1');
    await this.$store.dispatch('fetchMembers2');
    await this.$store.dispatch('fetchMembers3');
  }
};
</script>
