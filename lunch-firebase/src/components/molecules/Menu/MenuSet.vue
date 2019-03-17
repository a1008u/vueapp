<template>
  <div id="Menuset">
    <title-text class='title' :label='title'></title-text>
    <div class="columns is-mobile">
      <div class="field is-grouped is-grouped-multiline">
        <mkgroup-iconbutton class='control' option1='is-primary' option2='is-outlined' option3='is-medium' iconoption='coffee'>make a new group</mkgroup-iconbutton>
        <backnumbermenu-iconbutton class='control' option1='is-info' option2='is-outlined' option3='is-medium' iconoption='check'>check the backnumber</backnumbermenu-iconbutton>
      </div>
    </div>
  </div>
</template>

<script>
import BacknumbermenuIconbutton from "@/components/atoms/Button/BacknumbermenuIconbutton"
import MkgroupIconbutton from "@/components/atoms/Button/MkgroupIconbutton"
import TitleText from "@/components/atoms/Text/TitleText"

export default {
  name: 'Menuset',
  components:{
    BacknumbermenuIconbutton: BacknumbermenuIconbutton,
    MkgroupIconbutton: MkgroupIconbutton,
    TitleText: TitleText
  },
  data(){
    return {
      title:'Have a nice Have Fun Lunch'
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
}
</style>
