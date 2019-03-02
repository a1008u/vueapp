<template>
  <div id="BaseCardset" class="card">

    <header-card :previewText='titleText'/>

    <div class="card-content" v-for="(member, mindex) in members" :key='mindex'>
      <base-card
      :previewText='member.name' :inputText="member.name" :mindex='mindex' :modeFix='modeFix'
      @input-organisms-newtext="changeText"/>
    </div>

    <!-- 重複確認チェックの結果表示 -->
    <check-cardset :outs='outs' :groupindex='groupindex' :index='index' :outsState='outsState'/>
  </div>
</template>

<script>
// import Firestore from "@/util/Firestore";
import BaseCard from "@/components/molecules/Card/BaseCard"
import HeaderCard from "@/components/molecules/Card/HeaderCard"
import CheckCardset from "@/components/organisms/Card/CheckCardset"

export default {
  name: 'BaseCardset',
  components:{
    HeaderCard: HeaderCard,
    BaseCard: BaseCard,
    CheckCardset:CheckCardset
  },
  props: {
    members:{
      type: Array,
      description: "編集可能かどうか"
    },
    modeFix:{
      type: Boolean,
      description: "編集可能かどうか"
    },
    outs: {
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
    outsState:{
      type: Boolean,
      description: "被っているかの状態を示す"
    }
  },
  data(){
    return {
      titleText: 'GROUP'
    }
  },
  methods: {
    changeText(newText, targetIndex) {
      if (this.members[targetIndex].name !== newText) this.members[targetIndex].name = newText
    }
  },
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.backnumberlist:first-child{
  margin-top: 0px;
}
.backnumberlist{
  margin-top: 40px;
}
</style>
