<template>
<div id="IputText">
    <input class="input" type="text" v-model="internalText">
</div>
</template>

<script>
export default {
  name: '"IputText',
  props: {
    text: {
      type: String,
      description: "テキストを表す。"
    }
  },
  computed:{
    internalText: {
      get() {
        return this.text
      },
      set(newText) {
        this.text=newText
        this.$emit('input-newtext',this.text)
      }
    }
  }
};
</script>

<style scoped>
</style>