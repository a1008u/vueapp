<template>

  <div id='InputCard' class="card">
    <header class="card-header has-background-grey-darker">
      <p class="card-header-title has-text-light">
        3.グループ数とグループ人数の設定
      </p>
    </header>
    <div class="card-content center">
      <div class="columns">
        <div class="column">
          Group <Select class="space" :dateArray="counts" @selectValue='selectGroup'/>
        </div>
        <div class="column">
          Member <Select class="space" :dateArray="counts" @selectValue='selectMember'/>
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
    selectGroup(e) {
      this.year = e
      this.$emit('selectGroup', e);
    },
    selectMember(e) {
      this.month = e
      this.$emit('selectMember', e);
    }
  },
  data(){
    return {
      group: {
        type: Number,
        description: "グループ人数"
      },
      memmber: {
        type: Number,
        description: "member人数"
      },
      counts: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
        { text: '9', value: 9 },
        { text: '10', value: 10 },
        { text: '11', value: 11 },
        { text: '12', value: 12 },
        { text: '13', value: 13 },
        { text: '14', value: 14 },
        { text: '15', value: 15 },
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
