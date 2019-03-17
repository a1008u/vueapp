<template>
  <div id="BaseCard" class="content">
    <icon-text :text="previewText" iconoption='user-circle'/>
    <input-text v-if="modeFix" :text="inputText" @input-newtext="changeText" class='top'/>
  </div>
</template>

<script>
import IconText from "@/components/atoms/Text/IconText"
import InputText from "@/components/atoms/Input/InputText"

export default {
  name: 'BaseCard',
  components:{
    IconText: IconText,
    InputText: InputText
  },
  props: {
    previewText: {
      type: String,
      description: "表示させたい文字"
    },
    inputText: {
      type: String,
      description: "編集させたい文字"
    },
    modeFix:{
      type: Boolean,
      description: "編集可能かどうか"
    },
    mindex:{
      type: Boolean,
      description: "編集可能かどうか"
    }
  },
  methods: {
    changeText(newText) {
      if (this.previewText !== newText) this.$emit('input-organisms-newtext',newText, this.mindex)
    }
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
