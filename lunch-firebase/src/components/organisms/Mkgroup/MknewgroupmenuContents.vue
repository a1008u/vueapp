<template>
  <div id="MknewgroupmenuContents">

    <div class="columns">
      <div class="column">
        <uploadFile-card class="card1" @setCsvtext='setCsvtext'/>
      </div>
      <div class="column">
        <inputyearmonth-card class="card2" @selectValueYear='selectValueYear' @selectValueMonth='selectValueMonth'/>
      </div>
      <div class="column">
        <inputgroupmember-card class="card3" @selectGroup='selectGroup' @selectMember='selectMember'/>
      </div>
    </div>

    <mkgroupnew-button class='option' :option1='option1' :option2='option2' @groupListMk='groupListMk'>
      新規グループ作成
    </mkgroupnew-button>

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

import MkgroupnewButton from "@/components/atoms/Button/MkgroupnewButton"
import InputyearmonthCard from "@/components/molecules/Card/InputyearmonthCard"
import InputgroupmemberCard from "@/components/molecules/Card/InputgroupmemberCard"
import UploadFileCard from "@/components/molecules/Card/UploadFileCard"

export default {
  name: 'MknewgroupmenuContents',
  props:[],
  components:{
    MkgroupnewButton:MkgroupnewButton,
    InputyearmonthCard: InputyearmonthCard ,
    InputgroupmemberCard: InputgroupmemberCard,
    UploadFileCard: UploadFileCard
  },
  data() {
    return{
      option1:'is-success',
      option2:'is-rounded',
      upLoadArray:{
        type: Array
      },
      year:{
        type: String
      },
      month:{
        type: String
      },
      groupNumber:{
        type: Number
      },
      memberNumber:{
        type: Number
      }
    }
  },
  async mounted() {
  },
  methods:{
    setCsvtext(upLoadArray) {
      this.upLoadArray = upLoadArray
    },
    selectValueYear(year) {
      this.year = year
    },
    selectValueMonth(month) {
      this.month = month
    },
    selectGroup(groupNumber) {
      this.groupNumber = groupNumber
    },
    selectMember(memberNumber) {
      this.memberNumber = memberNumber
    },
    groupListMk(){
      this.$emit('groupListMk', this.upLoadArray, this.year, this.month, this.groupNumber,this.memberNumber);
    }
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
.option{
  margin-top: 40px;
} 
</style>
