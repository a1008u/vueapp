<template>
  <div id="grandmenu">

    <div v-for="(g, groupindex) in group" :key='groupindex'>
      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(members, index) in g" :key='index'>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>
                  <b-icon pack="fas" icon="users"></b-icon>
                  Group
                </span>
              </p>
            </header>

            <div class="card-content" v-for="(member, index) in members" :key='index'>
              <div class="content">
                <span>
                  <b-icon pack="fas" icon="user-circle"></b-icon>
                  {{member.name}}
                  <div v-if="modeFix">
                    <input class="input" type="text" v-model="member.name">
                  </div>
                </span>
              </div>
            </div>

            <!-- 重複確認チェックの結果表示 -->
            <Cardck :out1='out1' :out2='out2' :out3='out3' :out4='out4' :out5='out5' :groupindex='groupindex' :index='index'></Cardck>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Cardck from './CardCk';

export default {
  name: 'cardedit',
  props:['group', 'modeFix','out1','out2','out3','out4','out5'],
  data(){
    return {
    }
  },
  components:{
    Cardck:Cardck
  },
  async mounted() {
  },
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
a{
  text-decoration:none !important;
}
</style>
