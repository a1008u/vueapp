<template>
  <div id="CheckButton">
    <div :class="['button',(option1 ? option1 : ''),option2 ? option2 : '',loadingck? loadingck : '']"
    :name="name"
    @click="check('check')">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data(){
    return {
    }
  },
  props: {
    name: {
      type: String
    },
    option1: {
      type: String
    },
    option2: {
      type: String
    },
    loadingck: {
      type: String
    }
  },
  components:{
  },
  methods:{
    check(e) {
      this.$emit('check', e)
    },
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style lang="css" scoped>
</style>
