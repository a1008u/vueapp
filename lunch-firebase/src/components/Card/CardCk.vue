<template>
  <div id="CardcK">
    <div class="card-content" v-if="out1.length !== 0 || out2.length !== 0 || out3.length !== 0 || out4.length !== 0 || out5.length !== 0 ">
      <div class="content">
        <article v-if="out1.length !== 0 && out1[groupindex][index].length !== 0" class="message is-danger">
          <div class="message-header">
            <p>１回前</p>
          </div>
          <div class="message-body">
            <p v-for="(value1, index1) in out1[groupindex][index]" :key='index1'>
            {{value1}}
            </p>
          </div>
        </article>
        <article v-if="out2.length !== 0 && out2[groupindex][index].length !== 0" class="message is-danger">
          <div class="message-header">
            <p>2回前</p>
          </div>
          <div class="message-body">
            <p v-for="(value2, index2) in out2[groupindex][index]" :key='index2'>
            {{value2}}
            </p>
          </div>
        </article>
        <article v-if="out3.length !== 0 && out3[groupindex][index].length !== 0" class="message is-danger">
          <div class="message-header">
            <p>3回前</p>
          </div>
          <div class="message-body">
            <p v-for="(value3, index3) in out3[groupindex][index]" :key='index3'>
            {{value3}}
            </p>
          </div>
        </article>
        <article v-if="out4.length !== 0 && out4[groupindex][index].length !== 0" class="message is-danger">
          <div class="message-header">
            <p>4回前</p>
          </div>
          <div class="message-body">
            <p v-for="(value4, index4) in out4[groupindex][index]" :key='index4'>
            {{value4}}
            </p>
          </div>
        </article>
        <article v-if="out5.length !== 0 && out5[groupindex][index].length !== 0" class="message is-danger">
          <div class="message-header">
            <p>5回前</p>
          </div>
          <div class="message-body">
            <p v-for="(value5, index5) in out5[groupindex][index]" :key='index5'>
            {{value5}}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'cardck',
  props:['out1','out2','out3','out4','out5', 'groupindex', 'index'],
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
