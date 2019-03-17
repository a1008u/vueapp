<template>
  <div id="SaveButton">
    <div :class="['button',(option1 ? option1 : ''),option2 ? option2 : '',loadingsave ? loadingsave: '']"
    :name="name"
    @click="save('save')">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaveButton',
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
    loadingsave:{
      type: String
    }
  },
  components:{
  },
  methods:{
    save(e) {
      this.$emit('save', e)
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
