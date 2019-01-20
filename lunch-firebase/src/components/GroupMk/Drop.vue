<template>
  <div id="drop" class="drop">
    <div class="field" @dragleave.prevent @dragover.prevent @drop.prevent="onDrop" @change="onDrop">
      <div class="file is-centered is-boxed is-success has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              {{Fileselect}}
              <input class="drop__input" type="file" multiple="multiple" >
            </span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import csv from 'csv-parser';
import fileReaderStream from 'filereader-stream';
const fs = require('fs')

export default {
  name: 'drop',
  data(){
    return {
      tempMembers:[],
      Fileselect:'csvファイルをドラックか選択してください',
    }
  },
  props:['targetGroup'],
  methods:{
    onDrop:function(event){
      const fileList = event.target.files ? event.target.files: event.dataTransfer.files;
      console.log(fileList[0])
      if(fileList) {
        this.Fileselect = fileList[0].name
        const reader = new FileReader
        reader.onload = (e) => {
          const names = e.target.result.replace(/\n/ig, '').split(',');
          console.log(names)
          const results = names.map(name => name.replace(/\s+/g, ""))
          console.log('uploadFile : ', results)
          this.$emit('set-csvtext', results);
        }
        reader.readAsText(fileList[0]);
      }
    }
  },
  computed:{
  },
  async created(){
  }
};
</script>

<style scoped>
.drop {
  text-align: center;
}
label > input,
span > input  {
	display:none;	/* アップロードボタンのスタイルを無効にする */
}
label {
	color: rgba(0, 0, 0, 1.00);					/* ラベルテキストの色を指定する */
	/* background-color: rgb(99, 211, 127);ラベルの背景色を指定する */
	/* padding: 30px;					ラベルとテキスト間の余白を指定する */
	/* border: double 4px #AAAAAA;ラベルのボーダーを指定する */
}
</style>
