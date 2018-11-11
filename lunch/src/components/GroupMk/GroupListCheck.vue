<template>
  <div id="groupList">

    <div v-if="viewContents">
      <div v-if="registerState">
        登録完了<br />
        <router-link class="navbar-brand" to="/">Home</router-link>
      </div>
      <div v-else>
        すでに登録されています<br />
        <router-link class="navbar-brand" to="/">Home</router-link>
      </div>
    </div>
    <div v-else>

      <RegisterButtonSet :buttonState='buttonState' :viewContents='viewContents' :registerState='registerState'
                          @save='save' @confirm='confirm'
                          @fix='fix' @ck='ck'></RegisterButtonSet>

      <br />

      <Cardedit :group='mkGroup' :modeFix='modeFix'
                :out1='out1' :out2='out2' :out3='out3'></Cardedit>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import { API_URL } from '../../constants';
import Cardedit from '../Card/CardEdit';
import RegisterButtonSet from '../buttonSet/RegisterButtonSet';
import Save from '../../util/Save.js';
import Daily from '../../util/Daily.js';

export default {
  name: 'grouplist',
  data(){
    return {
      tempMembers:[],
      applicants:[],
      out1 :[],
      out2 :[],
      out3 :[],
      groups :[],
      modeFix :false,
      buttonState:false,
      viewContents:false,
      registerState:false,
      config : {headers: {'Content-Type': 'application/json'}}
    }
  },
  props:['selectedTotalGroupNum','selectedGroupNum','csvText'],
  components:{
    Cardedit:Cardedit,
    RegisterButtonSet:RegisterButtonSet,
  },
  methods:{
    fix(){
      this.modeFix = !this.modeFix;
    },
    confirm(){
      this.buttonState = !this.buttonState;
      this.modeFix = false;
    },
    async save(){
      this.viewContents = !this.viewContents;
      const dt = new Date();
      const year = dt.getFullYear();
      const month = dt.getMonth()+1;
      let targetYearMonth = `${year}${month}`;

      // 保存処理実施確認
      const targetYearMonths = await Daily.mkTargetYearMonths();
      if(!targetYearMonths.includes(Number(targetYearMonth))) {

        // totalの登録 -------------------------------
        // this.saveTotal(year, month);
        Save.saveTotal(year, month, this.config)

        // groupの登録 -------------------------------
        // this.saveGroup(year, month, this.tempMembers);
        Save.saveGroup(year, month, this.tempMembers, this.config);

        // 状態変更 -------------------------------
        this.registerState = !this.registerState;
      }

    },
    mkCkGroups(){
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
    },
    mkDabuleCkGroupList(ckGroups, storeMembers){
      let dabuleCkGroupList = [];
      let dabuleCkGroup = [];
      for (let members of ckGroups) {
        for (let group of storeMembers.group) {
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
    },
    mkOutGroup(ckGroups, dabuleCkGroupList){
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
    },
    mkViewGroup(outGroup) {
      let b = outGroup.length ;// 26
      let cnt = 3;            // いくつずつに分割するか
      let newArr = [];             // 新しく作る配列

      for(let i = 0; i < Math.ceil(b / cnt); i++) {
        let j = i * cnt;
        let p = outGroup.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
        newArr.push(p);                    // 取得したものを newArr に追加
      }
      return newArr
    },
    async ck(){
      console.log(' -------- ')
      // mainロジック --------------------------------------
      this.modeFix = false;

      // 検索対象変形
      const ckGroups = this.mkCkGroups();

      // チェック対処を取得
      const targetYearMonths = await Daily.mkTargetYearMonths();
      let yearMonth = await Daily.mkTargetYearMonth(targetYearMonths)

      // チェック
      const dabuleCkGroupList1 = this.mkDabuleCkGroupList(ckGroups, yearMonth[0]);
      const dabuleCkGroupList2 = this.mkDabuleCkGroupList(ckGroups, yearMonth[1]);
      const dabuleCkGroupList3 = this.mkDabuleCkGroupList(ckGroups, yearMonth[2]);


      // 該当箇所を抽出
      const outGroup1 = this.mkOutGroup(ckGroups, dabuleCkGroupList1);
      const outGroup2 = this.mkOutGroup(ckGroups, dabuleCkGroupList2);
      const outGroup3 = this.mkOutGroup(ckGroups, dabuleCkGroupList3);

      // TODO methodへ
      this.out1 = this.mkViewGroup(outGroup1);
      this.out2 = this.mkViewGroup(outGroup2);
      this.out3 = this.mkViewGroup(outGroup3);
      console.log('------------------');
      console.log(this.out1);
      console.log(this.out2);
      console.log(this.out3);
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
      let b = newMembers.length ;// 26
      let cnt = 3;            // いくつずつに分割するか
      let newArr = [];             // 新しく作る配列

      for(let i = 0; i < Math.ceil(b / cnt); i++) {
        let j = i * cnt;
        let p = newMembers.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
        newArr.push(p);                    // 取得したものを newArr に追加
      }

      console.log(newArr)

      this.groups = newArr;
      // return newMembers;
      return this.groups
	  }
  },
  async created(){
  }
};
</script>

<style scoped>
.columns{
  text-align: center;
}
</style>
