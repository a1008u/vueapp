<template>
  <div id="BacknumbermonthButton">
    <div :class="['extendsparts','button',(option1 ? option1 : ''),option2 ? option2 : '']"
    :name="name"
    @click="$click('save')">
      <slot/>
    </div>
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
    click (e) {
      this.$emit('click', e)
    },
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style lang="css" scoped>
.extendsparts{
    width: 50px;
    height: 50px;
}
</style>
