<template>
  <div id="ConfirmButton">
    <div :class="['button',(option1 ? option1 : ''),option2 ? option2 : '']"
    :name="name"
    @click="confirm('confirm')">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmButton',
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
    }
  },
  components:{
  },
  methods:{
    confirm(e) {
      this.$emit('confirm', e)
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
