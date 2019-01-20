<template>
  <div id="grandmenu">

    <div v-for="(group, groupindex) in group" :key='groupindex'>
      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(members, index) in group" :key='index'>
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
                </span>
              </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">みんなに連絡</a>
                <a href="#" class="card-footer-item">Edit</a>
            </footer>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'card',
  props:['group'],
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
