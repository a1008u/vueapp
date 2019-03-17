<template>
<div id="IconText">
    <b-icon pack="fas" :icon="[(iconoption? iconoption : '')]"></b-icon>
    {{ text }}
</div>
</template>

<script>
export default {
  name: 'IconText',
  props: {
    text: {
      type: String,
      description: "テキストを表す。"
    },
    iconoption: {
      type: String,
      description: "iconを指定する。"
    }
  }
};
</script>

<style scoped>
</style>