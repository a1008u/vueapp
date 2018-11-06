<template>
  <div id="grandmenu">

    <div v-for="(g, groupindex) in group" :key='groupindex'>
      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(members, index) in g" :key='index'>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <!-- 第{{(index + 1) * (groupindex + 1)}}グループ -->
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
            <!-- <footer class="card-footer"></footer> -->

              <div class="card-content">
                <div class="content" v-if="out1.length !== 0 && out2.length !== 0 && out3.length !== 0 ">

                  <div v-if="out1[index].length !== 0">
                    1回目
                    <div class="columns is-mobile is-centered" >
                      <div class="column is-3" v-for="(o1, i) in out1[index]" :key="i">{{o1}}</div>
                    </div>
                  </div>
                  <div v-if="out2[index].length !== 0">
                    2回目
                    <div class="columns is-mobile is-centered" >
                      <div class="column is-3" v-for="(o2, i) in out2[index]" :key="i">{{o2}}</div>
                    </div>
                  </div>
                  <div v-if="out3[index].length !== 0" >
                    3回目
                    <div class="columns is-mobile is-centered">
                      <div class="column is-3" v-for="(o3, i) in out3[index]" :key="i">{{o3}}</div>
                    </div>
                  </div>

                </div>
              </div>

                <!-- <a href="#" class="card-footer-item">みんなに連絡</a>
                <a href="#" class="card-footer-item">Edit</a> -->
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'cardedit',
  props:['group', 'modeFix','out1','out2','out3'],
  data(){
    return {
    }
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
