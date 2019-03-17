<template>
  <h3 id="SubtitleText" class="subtitle is-3">
    <slot>
      {{ label }}
    </slot>
  </h3>
</template>

<script>
export default {
  name: 'SubtitleText',
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