<template>
  <newgroupContents class="GroupMk" />
</template>

<script>
import newgroupContents from '../components/organisms/Contents/newgroupContents';

export default {
  name: 'GroupMk',
  data(){
    return {
    }
  },
  components:{
    newgroupContents : newgroupContents
  },
  methods:{
  }
};
</script>

<style scoped>
.GroupMk{
  width: 70%;
  margin: 100px auto 0;
}
</style>
