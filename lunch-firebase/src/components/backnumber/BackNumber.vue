<template>
  <div id="grandmenu">
    <div class="message-header">
      <router-link class="button is-info is-rounded" to="/backnumbermenu">back</router-link>
    </div>

    <br />

    <div v-if='registerState'>
      {{resultUpdate}}<br />
    </div>
    <div v-else>
      <RegisterButtonSet 
        :buttonState='buttonState' :viewContents='viewContents'
        @save='save' @confirm='confirm' 
        @fix='fix' @ck='ck'></RegisterButtonSet>
    </div>

    <br />

    <Cardedit 
      :group='group' :modeFix='modeFix'
      :out1='out1' :out2='out2' :out3='out3' :out4='out4' :out5='out5'></Cardedit>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import { API_URL } from '../../constants';
import Card from '../Card/Card';
import Cardedit from '../Card/CardEdit';
import RegisterButtonSet from '../buttonSet/RegisterButtonSet';
import Save from '../../util/Save.js';
import Daily from '../../util/Daily.js';
import Group from '../../util/Group.js';
import Update from '../../util/Update.js';
import db from "@/firebase/init";
import Firestore from "../../util/Firestore";

export default {
  name: 'backnumber',
  props:['targetGroup','yearmonth'],
  data(){
    return {
      tempMembers:[],
      group:[],
      out1 :[],
      out2 :[],
      out3 :[],
      out4 :[],
      out5 :[],
      modeFix :false,
      buttonState: false,
      applicants:[],
      group :[],
      viewContents:false,
      registerState:false,
      resultUpdate: '更新中',
      config : {headers: {'Content-Type': 'application/json'}}
    }
  },
  async mounted() {
    let [year, month] = this.yearmonth.split('_');
    console.log(year)
    console.log(month)

    let registeredGroupMember = await Firestore.getFireStore("groupmember", `${year}${month}`);
    const data = []
    const count = Number(registeredGroupMember.data()['group']['count'])
    for (let g of Firestore.range(count)) {
      let c = (g < 10) ? `0${g}`: g
      data.push(registeredGroupMember.data()['group'][c])
    }

    let cnt = 3;                  // いくつずつに分割するか
    let newArr = [];              // 新しく作る配列
    for(let i = 0; i < Math.ceil(data.length / cnt); i++) {
      let j = i * cnt;
      let p = data.slice(j, j + cnt);     // i*cnt 番目から i*cnt+cnt 番目まで取得
      newArr.push(p);                    // 取得したものを newArr に追加
    }

    this.group = newArr;
    console.log('group : ', this.group);

  },
  components:{
    Card:Card,
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
      let [year, month] = this.yearmonth.split('_');

      const result = await Update.updateGroupViaFireStore(year, month, this.group)
      this.resultUpdate = (result) ? '更新完了': '更新に失敗しました'
      this.registerState = !this.registerState;

      // ckの初期化
      this.out1=[];
      this.out2=[];
      this.out3=[];
      this.out4=[];
      this.out5=[];

    },
    async ck(){
      // mainロジック --------------------------------------
      this.modeFix = false;

      // 画面上に出ている検索対象のグループを検索がしやすいようにする
      const ckGroups = Group.mkCkGroup(this.group);

      // チェック対処を取得(対象年月から3回分過去のグループを取得)
      const targetYearMonths = await Daily.mkTargetYearMonthsViaFirastore()
      const [targetYear, targetmonth] = this.yearmonth.split('_');
      const index = targetYearMonths.indexOf(`${targetYear}${targetmonth}`);
      const targets = targetYearMonths.slice(index + 1, index + 6);
      const yearMonths = await Daily.mkTargetYearMonthBkViaFirestore(targets)

      console.log('targets : ', targets)

      // 重複チェック（1回前 -> 2回前 -> 3回前）
      this.out1 = (yearMonths.length > 0) ? Group.registerOut(0, yearMonths, ckGroups) : [];
      this.out2 = (yearMonths.length > 1) ? Group.registerOut(1, yearMonths, ckGroups) : [];
      this.out3 = (yearMonths.length > 2) ? Group.registerOut(2, yearMonths, ckGroups) : [];
      this.out4 = (yearMonths.length > 3) ? Group.registerOut(3, yearMonths, ckGroups) : [];
      this.out5 = (yearMonths.length > 4) ? Group.registerOut(4, yearMonths, ckGroups) : [];

      console.log('out1 : ', this.out1)
      console.log('out2 : ', this.out2)
      console.log('out3 : ', this.out3)
      console.log('out4 : ', this.out4)
      console.log('out5 : ', this.out5)


    }
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>

</style>
