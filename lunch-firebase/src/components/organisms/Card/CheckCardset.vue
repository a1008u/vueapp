<template>
  <div id="CheckCardset" class="card-content" v-if="outsState">
    <div class="content " v-for="(out,outsIndex) in outs" :key="outsIndex">
      <check-card :out='out' :groupindex='groupindex' :index='index' :checkcount='outsIndex + 1' option1='is-danger'/>
    </div>
  </div>
</template>

<script>
// import Firestore from "@/util/Firestore";
import CheckCard from "@/components/molecules/Card/CheckCard"

export default {
  name: 'CheckCardset',
  components:{
    CheckCard: CheckCard
  },
  props: {
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
    }
  },
  computed:{
  },
  methods: {
  },
};
</script>

<style scoped>
*{
  text-decoration: none;
}

</style>
