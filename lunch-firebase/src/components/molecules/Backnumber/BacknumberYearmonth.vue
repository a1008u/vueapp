<template>
  <div id="Backnumberyearmonth">
    <base-text class='title' :label='title'></base-text>
    <div class="field is-grouped is-grouped-multiline">
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>1</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>2</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>3</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>4</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>5</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>6</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>7</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>8</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>9</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>10</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>11</backnumbermonth-button>
      <backnumbermonth-button class='control' option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>12</backnumbermonth-button>
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
  data(){
    return {
      title:'2018'
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
