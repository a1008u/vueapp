<template>

  <div id='InputCard' class="card">
    <header class="card-header has-background-grey-darker">
      <p class="card-header-title has-text-light">
        2.グループを作成する年月を設定
      </p>
    </header>
    <div class="card-content center">
      <div class="columns">
        <div class="column">
          <Select class="space" :dateArray="yearoptions" @selectValue='selectValueYear'/>年
        </div>
        <div class="column">
          <Select class="space" :dateArray="monthoptions" @selectValue='selectValueMonth'/>月
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Select from "@/components/atoms/Select/Select"

export default {
  name: 'InputyearmonthCard',
  components:{
    Select: Select
  },
  methods:{
    selectValueYear(e) {
      this.year = e
      this.$emit('selectValueYear', e);
    },
    selectValueMonth(e) {
      this.month = e
      this.$emit('selectValueMonth', e);
    }
  },
  data(){
    return {
      year:'',
      month:'',
      yearoptions: [
        { text: '2019', value: '2019' },
        { text: '2020', value: '2020' },
        { text: '2021', value: '2021' },
        { text: '2022', value: '2022' },
        { text: '2023', value: '2023' },
        { text: '2024', value: '2024' },
        { text: '2025', value: '2025' }
      ],
      monthoptions: [
        { text: '1', value: '01'},
        { text: '2', value: '02' },
        { text: '3', value: '03' },
        { text: '4', value: '04' },
        { text: '5', value: '05' },
        { text: '6', value: '06' },
        { text: '7', value: '07' },
        { text: '8', value: '08' },
        { text: '9', value: '09' },
        { text: '10', value: '10' },
        { text: '11', value: '11' },
        { text: '12', value: '12' }
      ]
    }
  }
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.top{
  margin-top: 13px;
}
.card{
  width: 350px;
  height: 200px;
}
.card-content{
  margin-top: 35px;
}
.center{
  text-align: center;
}
.space{
  margin-right: 10px;
}
</style>
