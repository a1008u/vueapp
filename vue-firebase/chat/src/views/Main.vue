<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <Cart />
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'Main',
  props:['name'],
  components:{
    NewMessage
  },
  data(){
    return{
    }
  }
}
</script>

<style>
</style>