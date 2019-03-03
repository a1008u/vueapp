<template>
  <div id="RegisterSet">
    <div v-if='registerState'>
      {{resultUpdate}}<br />
    </div>
    <div v-else>
      <button-set
      :buttonState='buttonState'
      :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile'
      @save='save' @confirm='confirm' @fix='fix' @check='ck' />
    </div>
  </div>
</template>

<script>
import ButtonSet from "@/components/molecules/Button/ButtonSet"

export default {
  name: 'RegisterSet',
  props:['buttonState','registerState','resultUpdate','csvteam','csvfile','csvcolume'],
  components:{
    ButtonSet:ButtonSet
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
