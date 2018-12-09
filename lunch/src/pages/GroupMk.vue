<template>
  <div id="groupmk" class="groupmk">

    <div class="message-header">
      <router-link class="button is-info is-rounded" to="/">GroudMenu</router-link>
    </div>

    <br>

    <div v-if="groupListCheck">
      <GroupListCheck
        :csvText='csvText'
        :selectedTotalGroupNum='selectedTotalGroupNum'
        :selectedGroupNum='selectedGroupNum'>
      </GroupListCheck>
    </div>
    <div v-else-if="groupList">
      <GroupList></GroupList>
    </div>
    <div v-else>
      <!-- csvをdropさせるコンポーネント -->
      <Drop @set-csvtext='setCsvText'/><br>

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
            <button @click="groupList = !groupList" class="button is-info is-rounded">GroupList button</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import GroupList from '../components/GroupMk/GroupList.vue';
import GroupListCheck from '../components/GroupMk/GroupListCheck.vue';
import Drop from '../components/GroupMk/Drop.vue';

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
      groupListCheck :false,
      groupList :false,
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
      if(this.groupListCheck) {
        this.groupListCheck = false;
      } else {
        if(this.selectedTotalGroupNum !==0 && this.selectedGroupNum !==0) {
          this.groupListCheck = true;
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
