<template>
  <div id="Cardset" class="card">
    <div class="columns is-mobile" v-for="(g, groupindex) in group" :key='groupindex'>
      <div class="column is-one-third" v-for="(members, index) in g" :key='index'>
        <base-cardset
        :members='members' :modeFix='modeFix' :outs='outs' :groupindex='groupindex' :index='index' :outsState='outsState'/>
      </div>
    </div>
  </div>
</template>

<script>
// import Firestore from "@/util/Firestore";
import BaseCardset from "@/components/organisms/Card/BaseCardset"

export default {
  name: 'Cardset',
  components:{
    BaseCardset:BaseCardset
  },
  props: {
    group:{
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
    outsState:{
      type: Boolean,
      description: "被っているかの状態を示す"
    }
  },
  data(){
    return {
      group:[]
    }
  },
  methods: {
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
