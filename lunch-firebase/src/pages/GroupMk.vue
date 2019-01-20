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
        :selectedGroupNum='selectedGroupNum'
        :selectedYear='selectedYear'
        :selectedMonth='selectedMonth'>
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
          <div class="column is-half"><h2 class="title">グループ作成年月設定</h2></div>
          <div class="column is-half"><h2 class="title">Selected: {{ selectedYear }} 年 {{ selectedMonth }}月</h2></div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-half">年を決めてください。</div>
          <div class="column is-half">
            <div class="field select is-primary">
              <select v-model="selectedYear">
                <option v-for="option in yearoptions" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-half">月を決めてください。</div>
          <div class="column is-half">
            <div class="field select is-primary">
              <select v-model="selectedMonth">
                <option v-for="option in monthoptions" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

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
                <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
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
                <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="columns is-mobile is-centered">
          <div class="column">
            <button @click="groupListMk" class="button is-info is-rounded">GroupListCheck button</button>
          </div>
          <!-- <div class="column is-half">
            <button @click="groupList = !groupList" class="button is-info is-rounded">GroupList button</button>
          </div> -->
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
      selectedYear: 0,
      selectedMonth: 0,
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
        { text: '9', value: 9 },
        { text: '10', value: 10 },
        { text: '11', value: 11 },
        { text: '12', value: 12 },
        { text: '13', value: 13 },
        { text: '14', value: 14 },
        { text: '15', value: 15 },
      ],
      yearoptions: [
        { text: '2018', value: '2018' },
        { text: '2019', value: '2019' },
        { text: '2020', value: '2020' },
        { text: '2021', value: '2021' },
        { text: '2022', value: '2022' },
      ],
      monthoptions: [
        { text: '1', value: '01'},
        { text: '2', value: '02' },
        { text: '3', value: '03' },
        { text: '4', value: '04' },
        { text: '5', value: '05' },
        { text: '6', value: '06' },
        { text: '7', value: '07' },
        { text: '8', value: '08' },
        { text: '9', value: '09' },
        { text: '10', value: '10' },
        { text: '11', value: '11' },
        { text: '12', value: '12' }
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
