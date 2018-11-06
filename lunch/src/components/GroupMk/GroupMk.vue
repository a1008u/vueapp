<template>
  <div id="groupmk" class="groupmk">

    <div class="message-header">
      <router-link class="button is-info is-rounded" to="/">GroudMenu</router-link>
    </div>
    <br />
    <br />

    <Drop @set-csvtext='setCsvText' />

    <br><br>

    <div class="box">
      <div class="columns is-mobile is-centered">
        <div class="column is-half"><h2 class="title">グループ数</h2></div>
        <div class="column is-half"><h2 class="title">Selected: {{ selectedTotalGroupNum }} groups</h2></div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-half">作成したグループ数を決めてください。</div>
        <div class="column is-half">
          <div class="field select is-primary">
            <select v-model="selectedTotalGroupNum">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="columns is-mobile is-centered">
        <div class="column is-half"><h2 class="title">人数</h2></div>
        <div class="column is-half"><h2 class="title">Selected: {{ selectedGroupNum }} 人</h2></div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-half">1グループ辺りの人数を決めてください。</div>
        <div class="column is-half">
          <div class="field select is-primary">
            <select v-model="selectedGroupNum">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <button @click="groupListMk" class="button is-info is-rounded">GroupListCheck button</button>
        </div>
        <div class="column is-half">
          <button @click="useCk2 = !useCk2" class="button is-info is-rounded">GroupList button</button>
        </div>
      </div>
    </div>

    <div v-if="useCk1">
      <GroupListCheck
        :csvText='csvText'
        :selectedTotalGroupNum='selectedTotalGroupNum'
        :selectedGroupNum='selectedGroupNum'>
      </GroupListCheck>
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
      this.csvText.forEach(c =>{
        console.log(c)
      })
    }
  }
};
</script>

<style scoped>
.groupmk{
  margin: 20px;
}
.columns{
  text-align: center;
}
</style>
