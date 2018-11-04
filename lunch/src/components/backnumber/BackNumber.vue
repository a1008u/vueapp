<template>
  <div id="grandmenu">

    <div>
      <router-link class="button is-info is-rounded" to="/backnumbermenu">戻る</router-link>
    </div>

    <br />
    <!-- <div v-for="(members, index) in  this.group" :key='index'>
      <div v-for="(member, index) in members" :key='index'>
        {{member.name}}
      </div>
      <br/>
    </div> -->

    <div v-for="(group, groupindex) in this.group" :key='groupindex'>
      <div class="columns is-mobile">
        <div class="column is-one-third" v-for="(members, index) in group" :key='index'>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <!-- 第{{(index + 1) * (groupindex + 1)}}グループ -->
                <span>
                  <b-icon pack="fas" icon="users"></b-icon>
                  Group
                </span>
              </p>
            </header>
            <div class="card-content" v-for="(member, index) in members" :key='index'>
              <div class="content">
                <span>
                  <b-icon pack="fas" icon="user-circle"></b-icon>
                  {{member.name}}
                </span>
              </div>
            </div>
            <footer class="card-footer">
              <!--
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              -->
            </footer>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import { importMembers } from '../../group/member.js'
import { API_URL } from '../../constants';

export default {
  name: 'grandmenu',
  props:['targetGroup','yearmonth'],
  data(){
    return {
      tempMembers:[],
      group:[],
    }
  },
  async mounted() {
    let [year,month] = this.yearmonth.split('_');
    console.log(year)
    console.log(month)
    const {data} = await axios.get(`${API_URL}/${year}/${month}`);

    let b = data.group.length ;// 26
    let cnt = 3;            // いくつずつに分割するか
    let newArr = [];             // 新しく作る配列

    for(let i = 0; i < Math.ceil(b / cnt); i++) {
      let j = i * cnt;
      let p = data.group.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
      newArr.push(p);                    // 取得したものを newArr に追加
    }

    // this.group = data.group;
    // console.log(data);

    this.group = newArr;
    console.log(this.group);

  },
  methods:{
  },
  computed:{
  },
  async created(){
  }
};
</script>
