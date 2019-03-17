<template>
  <div id="newgroupContents" class="newgroupContents">
    <div v-if="groupListCheck">
      <MknewgroupContents :csvText='csvText'
        :targetYear='targetYear' :targetmonth='targetmonth'
        :selectedTotalGroupNum='selectedTotalGroupNum' :selectedMemberNum='selectedMemberNum'/>
    </div>
    <div v-else>
      <mknewgroupmenu-contents @groupListMk='groupListMk'/>
    </div>
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

import MknewgroupContents from "@/components/organisms/Mkgroup/MknewgroupContents"
import MknewgroupmenuContents from "@/components/organisms/Mkgroup/MknewgroupmenuContents"

export default {
  name: 'backnumber',
  props:['targetGroup','yearmonth'],
  components:{
    MknewgroupContents: MknewgroupContents,
    MknewgroupmenuContents: MknewgroupmenuContents
  },
  data(){
    return {
      groupListCheck:false ,
      csvText:{
        type:Array
      },
      targetYear:{
        type:String
      },
      targetmonth:{
        type:String
      },
      selectedTotalGroupNum:{
        type:Number
      },
      selectedMemberNum:{
        type:Number
      }
    }
  },
  async mounted() {
  },
  methods:{
    groupListMk(upLoadArray, year, month, groupNumber, memberNumber){
      if(this.groupListCheck) {
        this.groupListCheck = false;
      } else {
        if(groupNumber!==0 && memberNumber !==0) {
          this.csvText = upLoadArray
          this.targetYear = year
          this.targetmonth = month
          this.selectedTotalGroupNum = groupNumber
          this.selectedMemberNum = memberNumber
          this.groupListCheck = true;
        }
      }
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
