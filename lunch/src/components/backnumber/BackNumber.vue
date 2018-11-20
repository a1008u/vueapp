<template>
  <div id="grandmenu">
    <div class="message-header">
      <router-link class="button is-info is-rounded" to="/backnumbermenu">back</router-link>
    </div>

    <br />

      <div v-if='registerState'>
         更新完了<br />
      </div>
      <div v-else>
        <RegisterButtonSet :buttonState='buttonState' :viewContents='viewContents'
                  @save='save' @confirm='confirm' @fix='fix' @ck='ck'></RegisterButtonSet>
      </div>

      

      <br />

      <Cardedit :group='group' :modeFix='modeFix'
              :out1='out1' :out2='out2' :out3='out3' :out='out'></Cardedit>

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

export default {
  name: 'backnumber',
  props:['targetGroup','yearmonth'],
  data(){
    return {
      tempMembers:[],
      group:[],
      out :[],
      out1 :[],
      out2 :[],
      out3 :[],
      modeFix :false,
      buttonState: false,
      applicants:[],
      group :[],
      viewContents:false,
      registerState:false,
      config : {headers: {'Content-Type': 'application/json'}}
    }
  },
  async mounted() {
    let [year,month] = this.yearmonth.split('_');
    console.log(year)
    console.log(month)
    const {data} = await axios.get(`${API_URL}/${year}/${month}`);

    let b = data.group.length ;// 26
    let cnt = 3;            // いくつずつに分割するか
    let newArr = [];             // 新しく作る配列

    for(let i = 0; i < Math.ceil(b / cnt); i++) {
      let j = i * cnt;
      let p = data.group.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
      newArr.push(p);                    // 取得したものを newArr に追加
    }

    this.group = newArr;
    console.log(this.group);

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
      const dt = new Date();
      const year = dt.getFullYear();
      const month = dt.getMonth()+1;
      let targetYearMonth = `${year}${month}`;
      console.log(targetYearMonth)
      console.log(this.group)

      // 保存処理実施確認
      const updateGroup = [];
      for (let tmpGroup of this.group) {
        for(let tGroup of tmpGroup) {
          updateGroup.push(tGroup);
        }
      }

      Update.updateGroup(year, month, updateGroup, this.config);
      this.registerState = !this.registerState;

      // ckの初期化
      this.out1=[];
      this.out2=[];
      this.out3=[];

    },
    async ck(){
      console.log(' -------- ')
      this.out = [];

      // mainロジック --------------------------------------
      this.modeFix = false;

      // 検索対象変形
      const ckGroups = Group.mkCkGroup(this.group);

      // チェック対処を取得
      const targetYear = this.$route.params.yearmonth.slice(0,4);
      const targetmonth = this.$route.params.yearmonth.slice(5,7);
      const targetYearMonth = `${targetYear}${targetmonth}`;

      const targetYearMonths = await Daily.mkTargetYearMonths();
      let index = targetYearMonths.indexOf(Number(targetYearMonth));
      const target = targetYearMonths.slice(index + 1, index + 4);
      const yearMonth = await Daily.mkTargetYearMonthBk(target)

      let registerOut = (i) => {
        const dabuleCkGroupList = Group.mkDabuleCkGroupList(ckGroups, yearMonth[i]);
        const outGroup = Group.mkOutGroup(ckGroups, dabuleCkGroupList);
        this.out.push(Group.mkViewGroup(outGroup));
      }

      // 1ヶ月前
      if(yearMonth.length > 0) {
        registerOut(0);
        const dabuleCkGroupList1 = Group.mkDabuleCkGroupList(ckGroups, yearMonth[0]);
        const outGroup1 = Group.mkOutGroup(ckGroups, dabuleCkGroupList1);
        this.out1 = Group.mkViewGroup(outGroup1);
      }

      // 2ヶ月前
      if(yearMonth.length > 1) {
        registerOut(1);
        const dabuleCkGroupList2 = Group.mkDabuleCkGroupList(ckGroups, yearMonth[1]);
        const outGroup2 = Group.mkOutGroup(ckGroups, dabuleCkGroupList2);
        this.out2 = Group.mkViewGroup(outGroup2);
      }

      // 3ヶ月前
      if(yearMonth.length > 2) {
        registerOut(2);
        const dabuleCkGroupList3 = Group.mkDabuleCkGroupList(ckGroups, yearMonth[2]);
        const outGroup3 = Group.mkOutGroup(ckGroups, dabuleCkGroupList3);
        this.out3 = Group.mkViewGroup(outGroup3);
      }

      console.log(this.out)

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
