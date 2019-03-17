<template>
  <div id="BacknumberList">
    <backnumber-yearmonth class='backnumberlist'
    v-for="(yearmonth, index) in yearmonths" :key='index'
    :year="yearmonth.targetyear" :month="yearmonth.totalmonth"></backnumber-yearmonth>
  </div>
</template>

<script>
import Firestore from "@/util/Firestore";
import BacknumberYearmonth from "@/components/molecules/Backnumber/BacknumberYearmonth"

export default {
  name: 'BacknumberList',
  components:{
    BacknumberYearmonth: BacknumberYearmonth
  },
  data(){
    return {
      yearmonths:Array
    }
  },
  async mounted () {

    // firebaseに登録している年月を取得
    const groupTotal = await Firestore.getFireStore("group", "total");
    this.yearmonths = groupTotal.data().target;
  },
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.backnumberlist:first-child{
  margin-top: 0px;
}
.backnumberlist{
  margin-top: 40px;
}
</style>
