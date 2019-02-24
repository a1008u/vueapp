<template>
  <div id="Text">
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BaseText',
  data(){
    return {
    }
  },
  props: {
    label: {
      type: String,
      description: "説明文などを明記する。"
    }
  },
  components:{
  },
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style lang="css" scoped>
</style>