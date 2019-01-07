<template>
  <div id="groupList">

    <div v-if="viewContents">
      <div>{{resultRegister}}</div>
      <router-link class="navbar-brand" to="/">Home</router-link>
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
import Group from '../../util/Group.js';
import Firestore from "../../util/Firestore";

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
      resultRegister: '登録中',
      config : {headers: {'Content-Type': 'application/json'}}
    }
  },
  props:['selectedTotalGroupNum','selectedGroupNum','csvText','selectedYear','selectedMonth'],
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

      // 保存処理実施確認
      const targetYearMonths = await Daily.mkTargetYearMonthsViaFirastore();
      const targetYearMonth = `${this.selectedYear}${this.selectedMonth}`;
      if(!targetYearMonths.includes(targetYearMonth)) {

        console.log('year : ', this.selectedYear)
        console.log('month : ', this.selectedMonth)

        const result = await Save.exe(this.selectedYear, this.selectedMonth, this.tempMembers)
        console.log(result)

        // 状態変更 -------------------------------
        this.registerState = !this.registerState;

        if(result) {
          this.resultRegister = '登録しました。'
        } else {
          this.resultRegister = 'すでに登録されています。'
        }

        console.log(this.resultRegister)

      } else {
        this.resultRegister = 'すでに登録されています。'
        console.log(this.resultRegister)
      }

    },
    async ck(){
      console.log(' -------- ')
      // mainロジック --------------------------------------
      this.modeFix = false;

      // 検索対象変形
      const ckGroups = Group.mkCkGroups(this.tempMembers, this.selectedGroupNum);

      // チェック対処を取得
      const targetYearMonths = await Daily.mkTargetYearMonthsViaFirastore()
      targetYearMonths.push(`${this.selectedYear}${this.selectedMonth}`);
      targetYearMonths.sort((a, b) => (a < b ? 1 : -1));
      const index = targetYearMonths.indexOf(`${this.selectedYear}${this.selectedMonth}`);
      const targets = targetYearMonths.slice(index + 1, index + 4);
      const yearMonths = await Daily.mkNewTargetYearMonthViaFirastore(targets)

      console.log('targets : ', targets)

      // 重複箇所の取得
      this.out1 = (yearMonths.length > 0) ? Group.registerOut(0, yearMonths, ckGroups) : [];
      this.out2 = (yearMonths.length > 1) ? Group.registerOut(1, yearMonths, ckGroups) : [];
      this.out3 = (yearMonths.length > 2) ? Group.registerOut(2, yearMonths, ckGroups) : [];


      console.log('------------------');
      console.log('out1 : ', this.out1)
      console.log('out2 : ', this.out2)
      console.log('out3 : ', this.out3)
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
