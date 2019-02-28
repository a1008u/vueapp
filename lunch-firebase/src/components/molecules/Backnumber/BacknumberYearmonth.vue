<template>
  <div id="Backnumberyearmonth">
    <base-text class='title' :label='year'></base-text>
    <div class="field is-grouped is-grouped-multiline">
        <backnumbermonth-button v-for="(m, index) in month" :key='index' :year='year' :month='m'
        class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>
        </backnumbermonth-button>
    </div>
  </div>
</template>

<script>
import BacknumbermonthButton from "@/components/atoms/Button/BacknumbermonthButton"
import BaseText from "@/components/atoms/Text/BaseText"

export default {
  name: 'Backnumberyearmonth',
  components:{
    BacknumbermonthButton: BacknumbermonthButton,
    BaseText: BaseText
  },
  props: {
    year: {
      type: String,
      description: "登録している年"
    },
    month: {
      type: Array,
      description: "登録している月"
    }
  },
  data(){
    return {
    }
  },
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.columns{
  text-align: center;
}
.title {
  letter-spacing: 3px;
  font-size: 100%;
  color: hsl(0, 0%, 48%);
  font-style: italic;
  position: relative;
}
.title::after{
  content: '';
	position: absolute;
  width: 100%;
	height: 2px;
  background-color: hsl(0, 0%, 48%);
  bottom: 0;
	left: 0;
}
</style>
