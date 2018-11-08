<template>
  <div id="grandmenu">
    <div class="message-header">
      <router-link class="button is-info is-rounded" to="/backnumbermenu">back</router-link>
    </div>

    <br />

    <!-- <Card :group='group'></Card> -->

    <RegisterButtonSet :buttonState='buttonState'
        @save='save' @confirm='confirm' @fix='fix' @ck='ck'></RegisterButtonSet>

    <br />

    <Cardedit :group='group' :modeFix='modeFix'
              :out1='out1' :out2='out2' :out3='out3'></Cardedit>

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
      modeFix :false,
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
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>

</style>
