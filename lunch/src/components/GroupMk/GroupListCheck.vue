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
import { API_URL } from '../../constants';

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
      registerState:false,
      config : {headers: {'Content-Type': 'application/json'}}
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
    async saveTotal(year, month){
      const {data} = await axios.get(`${API_URL}/total`);
        let registerMonths ={};
        let months = [];
        let needNewYearFlag = true;
        data.forEach(target => {
          if(target.totalmonth.length !== 12) {
            target.totalmonth.forEach(month => months.push(month))
            needNewYearFlag = false;
          }
        })

        if(needNewYearFlag) {
          months.push(month)
        }

        months.push(month.toString())
        registerMonths.id = year;
        registerMonths.targetyear = year
        registerMonths.totalmonth = months;
        console.log(registerMonths);
        const {registerData} = await axios.put(`${API_URL}/total/${year}`, registerMonths, this.config);
    },
    async saveGroup(year, month){
      let registerGroup = {};
      registerGroup.id = month.toString();
      registerGroup.group = this.tempMembers
      const {registerDatas} = await axios.post(`${API_URL}/${year}`, registerGroup, this.config);
    }
    ,async save(){
      this.viewContents = !this.viewContents;
      const dt = new Date();
      const year = dt.getFullYear();
      const month = dt.getMonth()+1;
      let targetYearMonth = `${year}${month}`;

      // 保存処理実施確認
      const targetYearMonths = await this.mkTargetYearMonths();
      if(!targetYearMonths.includes(Number(targetYearMonth))) {

        // totalの登録 -------------------------------
        this.saveTotal(year, month);

        // groupの登録 -------------------------------
        this.saveGroup(year, month);

        // 状態変更 -------------------------------
        this.registerState = !this.registerState;
      }

    },
    async mkTargetYearMonths() {
      let targetYearMonths = [];
      const {data} = await axios.get(`${API_URL}/total`);
      data.forEach(target => {
        target.totalmonth.forEach(month => {
          let yearmonth = `${target.targetyear}${month}`
          targetYearMonths.push(Number(yearmonth))
        })
      })
      targetYearMonths.sort((a,b) => (a < b ? 1 : -1));
      console.log(`targetYearMonth ${targetYearMonths}`)
      return targetYearMonths;
    },
    async mkTargetYearMonth(targetYearMonths){
      let yearMonth = [];
      for(let i=0; i < 3; i++) {
        let year = targetYearMonths[i].toString().slice(0,4);
        let month = targetYearMonths[i].toString().slice(4,6);
        const {data} = await axios.get(`${API_URL}/${year}/${month}`);
        console.log(`${i}回目`)
        console.table(data)
        yearMonth.push(data)
      }
      return yearMonth;
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
    async ck(){
      console.log(' -------- ')
      // mainロジック --------------------------------------
      this.modeFix = false;

      // 検索対象変形
      const ckGroups = this.mkCkGroups();
      console.log(`ckGroups ${ckGroups}`);

      // チェック対処を取得
      const targetYearMonths = await this.mkTargetYearMonths();
      let yearMonth = await this.mkTargetYearMonth(targetYearMonths)

      // チェック
      const dabuleCkGroupList1 = this.mkDabuleCkGroupList(ckGroups, yearMonth[0]);
      const dabuleCkGroupList2 = this.mkDabuleCkGroupList(ckGroups, yearMonth[1]);
      const dabuleCkGroupList3 = this.mkDabuleCkGroupList(ckGroups, yearMonth[2]);
      console.log('------------------');
      console.log(dabuleCkGroupList1);
      console.log(dabuleCkGroupList2);
      console.log(dabuleCkGroupList3);

      // 該当箇所を抽出
      const outGroup1 = this.mkOutGroup(ckGroups, dabuleCkGroupList1);
      const outGroup2 = this.mkOutGroup(ckGroups, dabuleCkGroupList2);
      const outGroup3 = this.mkOutGroup(ckGroups, dabuleCkGroupList3);
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
  }
};
</script>
