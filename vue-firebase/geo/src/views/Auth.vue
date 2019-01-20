<template>
  <div class="auth">
    this {{ $route.params.target }}
    <div v-if=" $route.params.target === 'Login'">
      <Login />
    </div>
    <div v-else>
      <Signup />
    </div>
  </div>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Signup from "@/components/auth/Signup.vue";

export default {
  name: 'auth',
  props:['target'],
  data(){
    return {
    }
  },
  components: {
    Login,
    Signup
  }
}
</script>
