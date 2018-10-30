<template>
  <div id="groupmk">

    <Drop @set-csvtext='setCsvText'></Drop>

    <br><br><br><br>

    作成するGroup数
    <select v-model="selectedTotalGroupNum">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selectedTotalGroupNum }}</span>
    <br />

    1グループ辺りの人数
    <select v-model="selectedGroupNum">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selectedGroupNum }}</span>
    <br />

    <button @click="groupListMk">GroupListCheck button</button>
    <button @click="useCk2 = !useCk2">GroupList button</button>

    <div v-if="useCk1">
      <GroupListCheck :csvText='csvText' :selectedTotalGroupNum='selectedTotalGroupNum' :selectedGroupNum='selectedGroupNum'></GroupListCheck>
    </div>

    <div v-if="useCk2">
      <GroupList></GroupList>
    </div>

  </div>
</template>

<script>
import GroupList from './GroupList.vue';
import GroupListCheck from './GroupListCheck.vue';
import Drop from './Drop.vue';

export default {
  name: 'groupmk',
  data(){
    return {
      selectedTotalGroupNum: 0,
      selectedGroupNum: 0,
      options: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'four', value: 4 },
        { text: 'five', value: 5 },
        { text: 'six', value: 6 },
        { text: 'seven', value: 7 },
        { text: 'eight', value: 8 },
        { text: 'nine', value: 9 },
        { text: 'ten', value: 10 },
        { text: 'eleven', value: 11 },
        { text: 'twelve', value: 12 },
      ],
      useCk1 :false,
      useCk2 :false,
      csvText:[],
    }
  },
  components:{
    Drop: Drop,
    GroupList : GroupList,
    GroupListCheck : GroupListCheck,
  },
  methods:{
    groupListMk(){
      if(this.useCk1) {
        this.useCk1 = false;
      } else {
        if(this.selectedTotalGroupNum !==0 && this.selectedGroupNum !==0) {
          this.useCk1 = true;
        }
      }
    },
    setCsvText(files){
      this.csvText = files;
      console.log('------------')
      this.csvText.forEach(c=>{
        console.log(c)
      })
      console.log('------------')
    }
  }
};
</script>
