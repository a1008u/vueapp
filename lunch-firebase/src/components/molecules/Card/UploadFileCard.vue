<template>
  <div id='UploadFileCard' class="card">
    <header class="card-header has-background-grey-darker">
      <p class="card-header-title has-text-light">
        1.参加者をまとめたファイルをアップロード
      </p>
    </header>
    <div class="card-content center">
      <upload-file @set-csvtext='setCsvtext'/>
    </div>
  </div>
</template>

<script>
import UploadFile from "@/components/atoms/Upload/UploadFile"

export default {
  name: 'UploadFileCard',
  components:{
    UploadFile: UploadFile
  },
  methods:{
    setCsvtext(upLoadArray) {
      this.$emit('setCsvtext', upLoadArray);
    }
  },
  data(){
    return {}
  }
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.top{
  margin-top: 13px;
}
.card{
  width: 350px;
  height: 200px;
}
.card-content{
  margin-top: 20px;
}
.center{
  text-align: center;
}
</style>
