<template>
  <div id="RegisterSet">
    <div v-if='registerState'>
      <returnhomeicon-text :text="resultUpdate" iconoption='check-circle'/>
    </div>
    <div v-else>
      <button-set
      :buttonState='buttonState'
      :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile'
      :loadingsave='loadingsave' :loadingck='loadingck'
      @save='save' @confirm='confirm' @fix='fix' @check='check' />
    </div>
  </div>
</template>

<script>
import ButtonSet from "@/components/molecules/Button/ButtonSet"
import ReturnhomeiconText from "@/components/atoms/Text/ReturnhomeiconText"

export default {
  name: 'RegisterSet',
  props:['buttonState','registerState','resultUpdate','csvteam','csvfile','csvcolume','loadingsave','loadingck'],
  components:{
    ButtonSet:ButtonSet,
    ReturnhomeiconText:ReturnhomeiconText
  },
  data(){
    return {
    }
  },
  methods: {
    confirm(e) {
      this.$emit('confirm',e)
    },
    save(e) {
      this.$emit('save',e)
    },
    check(e) {
      this.$emit('check',e)
    },
    fix(e) {
      this.$emit('fix',e)
    }
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
.cardset{
  margin: 20px auto 0;
}
</style>
