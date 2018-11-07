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

            <!-- <footer class="card-footer"></footer> -->

              <div class="card-content" v-if="out1.length !== 0 && out2.length !== 0 && out3.length !== 0 ">
                <div class="content">
                  <div v-if="out1[groupindex][index].length !== 0" class="notification is-danger">
                    <span class="tag is-black is-medium">１ヶ月前</span>
                    <div class="columns is-mobile is-centered">
                      <div class="column is-2 " v-for="(value1, index1) in out1[groupindex][index]" :key='index1'>
                        {{value1}}
                      </div>
                    </div>
                  </div>
                  <div v-if="out2[groupindex][index].length !== 0" class="notification is-danger">
                    <span class="tag is-black is-medium">２ヶ月前</span>
                    <div class="columns is-mobile is-centered" >
                      <div class="column is-2" v-for="(value2, index2) in out2[groupindex][index]" :key='index2'>
                        {{value2}}
                      </div>
                    </div>
                  </div>
                  <div v-if="out3[groupindex][index].length !== 0" class="notification is-danger">
                    <span class="tag is-black is-medium">３ヶ月前</span>
                    <div class="columns is-mobile is-centered">
                      <div class="column is-2" v-for="(value3, index3) in out3[groupindex][index]" :key='index3'>
                        {{value3}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
