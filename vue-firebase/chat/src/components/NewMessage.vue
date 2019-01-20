<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMesssage">
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data(){
    return {
      newMesssage: null,
      feedback: null
    }
  },
  methods:{
    addMessage(){
      if(this.newMesssage) {
        db.collection('messages')
          .add({
            content: this.newMesssage,
            name: this.name,
            timestamp: Date.now()})
          .then(() => {
            this.newMesssage = null
            this.feedback = null})
          .catch(err => console.log(err))
      } else {
        this.feedback = 'you must enter a message in order to send one'
      }
    }
  }
}
</script>
