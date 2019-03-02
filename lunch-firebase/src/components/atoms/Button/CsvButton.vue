<template>
  <vue-csv-downloader
    id='CsvButton'
    class="button is-link is-rounded"
    :data="csvteam"
    :fields="csvcolume"
    :download-name='csvfile'>csv取得</vue-csv-downloader>
</template>

<script>
import VueCsvDownloader from 'vue-csv-downloader';

export default {
  name: 'CsvButton',
  data(){
    return {
    }
  },
  props: {
    csvteam: {
      type: Array
    },
    csvcolume: {
      type: Array
    },
    csvfile: {
      type: String
    }
  },
  components:{
    VueCsvDownloader
  },
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style lang="css" scoped>
</style>
