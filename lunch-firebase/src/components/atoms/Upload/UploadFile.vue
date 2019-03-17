<template>
  <div id='UploadFile' @dragleave.prevent @dragover.prevent @drop.prevent="onDrop" @change="onDrop">
    <div class="file is-boxed">
      <label class="file-label">
      <span class="file-cta">
        <icon-text :text="Fileselect" iconoption='file-import'></icon-text>
        <input class="drop__input" type="file" multiple="multiple" >
      </span>
      </label>
    </div>
  </div>
</template>

<script>
import IconText from "@/components/atoms/Text/IconText"
import encoding from "encoding-japanese"

export default {
  name: 'UploadFile',
  components:{
    IconText: IconText
  },
  data(){
    return {
      Fileselect:'csvをドラックか選択',
    }
  },
  methods:{
    onDrop:function(event){
      debugger
      const fileList = event.target.files ? event.target.files: event.dataTransfer.files;
      if(fileList) {
        this.Fileselect = fileList[0].name
        const reader = new FileReader
        reader.onload = (e) => {

          const names = e.target.result.replace(/\n/ig, '').split(',');

          const detected = encoding.detect(names);
          const utf8Array = encoding.convert(names,{
            to: 'UTF8',
            from: detected
          });
          console.log(detected, utf8Array)

          const results = utf8Array.map(name => name.replace(/\s+/g, ""))
          console.log('uploadFile : ', results)
          this.$emit('set-csvtext', results);
        }
        reader.readAsText(fileList[0]);
      }
    }
  },
};
</script>

<style scoped>
label > input,
span > input  {
  display:none;	/* アップロードボタンのスタイルを無効にする */
}
.file-label{
  margin: 0 auto;
}
</style>