<template>
  <router-link id='MkgroupIconButton' to="/groupmk"
    :class="['button',(option1 ? option1 : ''), option2 ? option2 : '', option3 ? option3 : '']"
    :name="name">
    <b-icon pack="fas" :icon="[(iconoption? iconoption : '')]"></b-icon>
    <span class="txt"><slot/></span>
  </router-link>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    text: {
      type: String,
      description: "ボタンのテキストを表す。"
    },
    option1: {
      type: String,
      description: "bulmaのボタン用オプション"
    },
    option2: {
      type: String,
      description: "bulmaのボタン用オプション"
    },
    option3: {
      type: String,
      description: "bulmaのボタン用オプション"
    },
    iconoption: {
      type: String,
      description: "iconを指定する。"
    }

  }
};
</script>

<style scoped>
.txt{
  text-decoration: none;
}
</style>
