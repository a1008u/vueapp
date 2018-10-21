<template>
  <div class="container">
    <!-- <basic-form /> -->
    <!-- <form-validations /> -->
    <!-- <ValueBinding /> -->
    <CustomValidations />
  </div>
</template>

<script>
import BasicForm from './components/BasicForm.vue'
import FormValidations from './components/FormValidations.vue'
import ValueBinding from './components/ValueBinding.vue'
import CustomValidations from './components/CustomValidations.vue'

export default {
  name: 'app',
  components: {
    BasicForm,
    FormValidations,
    ValueBinding,
    CustomValidations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
