<template>
  <randumgroup-contents id="BacknumberContents" class="BacknumberContents" :yearmonth='yearmonth'/>
</template>

<script>
import RandumgroupContents from "@/components/organisms/Contents/RandumgroupContents"

export default {
  name: 'BacknumberContents',
  props:['targetGroup','yearmonth'],
  components:{
    RandumgroupContents:RandumgroupContents
  },
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
.BacknumberContents{
  width: 70%;
  margin: 70px auto 0;
}
</style>
