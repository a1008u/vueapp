<template>
  <div id="grandmenu">
    <div v-if="buttonState">
        <div class="box">
          <div class="columns is-mobile is-centered">
            <div class="column is-half">
              <div class='button is-info is-outlined' @click="$emit('confirm')">入力し直す</div>
            </div>
            <div class="column is-half">
              <div class='button is-success is-outlined' @click="$emit('save')">保存</div>
            </div>
          </div>
        </div>
    </div>
    <div v-else>
        <div class="box">
          <div class="columns is-mobile is-centered">
            <div class="column is-one-third">
              <div class='button is-info is-outlined' @click="$emit('fix')">編集</div>
            </div>
            <div class="column is-one-third">
              <div class='button is-info is-outlined' @click="$emit('ck')">重複確認</div>
            </div>
            <div class="column is-one-third">
              <div class='button is-success is-outlined' @click="$emit('confirm')">確認</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'registerbuttonset',
  components: {
    },
  props:['buttonState'],
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
.columns{
  text-align: center;
}
</style>
