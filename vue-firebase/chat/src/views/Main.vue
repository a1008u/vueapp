<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <ChatArea />
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>
import ChatArea from "@/components/ChatArea"
import NewMessage from "@/components/NewMessage"

export default {
  name:'Main',
  props:['name'],
  components:{
    ChatArea,
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