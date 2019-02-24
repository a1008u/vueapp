<template>
  <h1 id="TitleText" class="title is-1">
    <slot>
      {{ label }}
    </slot>
  </h1>
</template>

<script>
export default {
  name: 'TitleText',
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