<template>
  <div id="BacknumbermonthButton">
    <router-link
      :class="['extendsparts','button',(option1 ? option1 : ''),option2 ? option2 : '']"
      :to="{ name : 'backnumber', params : { yearmonth:`${year}_${month}`}}">
      {{month}}月
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BacknumbermonthButton',
  data(){
    return {
    }
  },
  props: {
    month: {
      type: String
    },
    option1: {
      type: String
    },
    option2: {
      type: String
    },
    year: {
      type: String
    }
  },
  components:{
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style lang="css" scoped>
.extendsparts{
    width: 60px;
    height: 50px;
}
</style>
