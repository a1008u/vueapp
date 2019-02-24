<template>
  <div id="groupList">
    <div class='button is-success is-outlined' @click="save">保存する</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import { API_URL } from '../../constants';
import Cardedit from '../Card/CardEdit';
import RegisterButtonSet from '../buttonSet/RegisterButtonSet';

export default {
  name: 'grouplist',
  data(){
    return {
      config : {headers: {'Content-Type': 'application/json'}}
    }
  },
  props:['viewContents','registerState'],
  components:{
  },
  methods:{
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
  },
  computed:{
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
