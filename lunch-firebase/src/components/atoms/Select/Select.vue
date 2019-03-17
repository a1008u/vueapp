<template>
  <div class="select is-rounded is-small">
    <select  v-model="selectValue">
      <option v-for="option in dateArray" v-bind:value="option.value" v-bind:key="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    dateArray: {
      type: Array,
      description: "日付をのArrayを入れる"
    }
  },
  computed:{
    selectValue: {
      get() {
        return ''
      },
      set(selectValue) {
        this.$emit('selectValue',selectValue)
      }
    }
  }
};
</script>

<style scoped>
.txt{
  text-decoration: none;
}
</style>
