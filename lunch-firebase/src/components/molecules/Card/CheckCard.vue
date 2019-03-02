<template>
  <article v-if="out.length !== 0 && out[groupindex][index].length !== 0"
    :class="['message',(option1 ? option1 : '')]">
    <header class="message-header head">
      <base-text>{{checkcount}}回目</base-text>
    </header>
    <article class="message-body">
      <base-text class='txt-mod' v-for="(value1, index1) in out[groupindex][index]" :key='index1'>{{value1}}</base-text>
    </article>
  </article>
</template>

<script>
import BaseText from "@/components/atoms/Text/BaseText"

export default {
  name: 'BaseCard',
  components:{
    BaseText: BaseText,
  },
  props: {
    out: {
      type: Array,
      description: "ランチ参加者のグループ"
    },
    groupindex: {
      type: Number,
      description: "グループのインデックス"
    },
    index:{
      type: Number,
      description: "グループ内のメンバーのインデックス"
    },
    checkcount:{
      type: Number,
      description: "重複確認回数"
    },
    option1: {
      type: String,
      description: "bulmaのcardヘッダ用のオプション"
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
.head {
  letter-spacing: 1.3px;
  font-size: 70%;
  font-style: italic;
}
.txt-mod:first-child{
  margin-top: 0px;
}
.txt-mod{
  margin-top: 7px;
}
</style>
