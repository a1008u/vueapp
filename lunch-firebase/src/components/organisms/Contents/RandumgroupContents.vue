<template>
  <div id="grandmenu">
    <register-set
      :registerState='registerState' :resultUpdate='resultUpdate'
      :buttonState='buttonState' :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile' 
      :loadingsave='loadingsave' :loadingck='loadingck'
      @save='save' @confirm='confirm' @fix='fix' @check='check'
    />
    <cardset class='cardset' :group='group' :outs='outs' :modeFix='modeFix' :outsState='outsState'/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import VueCsvDownloader from 'vue-csv-downloader';

import db from "@/firebase/init";

import { API_URL } from '../../../constants';
import Save from '../../../util/Save.js';
import Daily from '../../../util/Daily.js';
import Group from '../../../util/Group.js';
import Update from '../../../util/Update.js';
import Firestore from "../../../util/Firestore";

import Cardset from "@/components/organisms/Card/Cardset"
import RegisterSet from "@/components/molecules/Register/RegisterSet"

export default {
  name: 'backnumber',
  props:['targetGroup','yearmonth'],
  components:{
    Cardset:Cardset,
    RegisterSet:RegisterSet
  },
  data(){
    return {
      group:[],
      outsState:false,
      loadingsave:'',
      loadingck:'',
      outs :[],
      out1 :[],
      out2 :[],
      out3 :[],
      out4 :[],
      out5 :[],
      csvfile:'',
      csvteam:[],
      csvcolume: ['グループ','名前1', '名前2', '名前3', '名前4'],
      modeFix :false,
      buttonState: false,
      registerState:false,
      resultUpdate: '更新中'
    }
  },
  async mounted() {
    const [year, month] = this.yearmonth.split('_');
    console.log('year : ', year, ' month : ', month)

    const registeredGroupMember = await Firestore.getFireStore("groupmember", `${year}${month}`);
    const data = []
    const count = Number(registeredGroupMember.data()['group']['count'])
    for (let g of Firestore.range(count)) {
      let c = (g < 10) ? `0${g}`: g
      data.push(registeredGroupMember.data()['group'][c])
    }

    const cnt = 3;                  // いくつずつに分割するか
    const newArr = [];              // 新しく作る配列
    for(let i = 0; i < Math.ceil(data.length / cnt); i++) {
      let j = i * cnt;
      let p = data.slice(j, j + cnt);     // i*cnt 番目から i*cnt+cnt 番目まで取得
      newArr.push(p);                    // 取得したものを newArr に追加
    }

    this.group = newArr;
    console.log('group : ', this.group);

    // csv用作成
    newArr.forEach(g => {
      g.forEach(team => {
        let t = {}
        t.id = this.csvteam.length + 1
        t['グループ'] = this.csvteam.length + 1
        team.forEach((person, index) => t[`名前${index + 1}`] = person['name'])
        this.csvteam.push(t)
      })
    })

    this.csvfile = `${year}_${month}_HaveFunLunch`


  },
  methods:{
    fix(){
      console.log('========','fix')
      this.modeFix = !this.modeFix;
    },
    confirm(){
      console.log('========','conf')
      this.buttonState = !this.buttonState;
      this.modeFix = false;
    },
    async save(){
      this.loadingsave='is-loading'
      const [year, month] = this.yearmonth.split('_');

      const result = await Update.updateGroupViaFireStore(year, month, this.group)
      this.resultUpdate = (result) ? '更新完了(homeに戻る)': '更新に失敗しました(homeに戻る)'
      this.registerState = !this.registerState;

      // ckの初期化
      this.out1=[];
      this.out2=[];
      this.out3=[];
      this.out4=[];
      this.out5=[];
      this.loadingsave=''

    },
    async check(){
      this.loadingck='is-loading'

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

      if(this.outs.length !== 0) {
        this.outs = []
      }

      this.outs.push(this.out1)
      this.outs.push(this.out2)
      this.outs.push(this.out3)
      this.outs.push(this.out4)
      this.outs.push(this.out5)
      console.log(this.outs)
      this.outs
        .flatMap(x => x)
        .flatMap(x => x)
        .filter(x => x.length !== 0)
        .map(() => this.outsState = true)

      this.loadingck=''
      return this.outsState;
    }
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
.cardset{
  margin: 20px auto 0;
}
</style>
