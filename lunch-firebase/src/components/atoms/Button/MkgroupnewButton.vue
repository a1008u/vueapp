<template>
  <div id="MkgroupnewButton">
    <div :class="['button',(option1 ? option1 : ''),option2 ? option2 : '']"
    :name="name"
    @click="groupListMk()">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MkgroupnewButton',
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
    groupListMk(e) {
      this.$emit('groupListMk', e)
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
