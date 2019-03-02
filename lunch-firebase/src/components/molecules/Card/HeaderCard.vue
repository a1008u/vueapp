<template>
  <header class="card-header">
    <p class="card-header-title">
      <icon-text :text='previewText' iconoption='users'/>
    </p>
  </header>
</template>

<script>
import IconText from "@/components/atoms/Text/IconText"

export default {
  name: 'BaseCard',
  components:{
    IconText: IconText
  },
  props: {
    previewText: {
      type: String,
      description: "表示させたい文字"
    }
  },
  methods: {
  },
  data(){
    return {
    }
  }
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.top{
  margin-top: 13px;
}
</style>
