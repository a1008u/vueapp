import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import Button from "./../../../components/atoms/Button/Button.vue";
import IconButton from "./../../../components/atoms/Button/IconButton.vue";
import MkgroupIconbutton from "./../../../components/atoms/Button/MkgroupIconbutton.vue";
import BacknumbermenuIconbutton from "./../../../components/atoms/Button/BacknumbermenuIconbutton.vue";
import BacknumbermonthButton from "./../../../components/atoms/Button/BacknumbermonthButton.vue";
import CsvButton from "./../../../components/atoms/Button/CsvButton.vue";
import CheckButton from "./../../../components/atoms/Button/CheckButton.vue";
import SaveButton from "./../../../components/atoms/Button/SaveButton.vue";
import FixButton from "./../../../components/atoms/Button/FixButton.vue";
import ConfirmButton from "./../../../components/atoms/Button/ConfirmButton.vue";
import MkgroupnewButton from "./../../../components/atoms/Button/MkgroupnewButton.vue";

// router用のサンプル
const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };
const Back = { template: "<div>Back</div>" };

storiesOf("atoms-button", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/groupmk", component: Home },
          { path: "/backnumbermenu", component: About },
          {
            path: "/backnumber/:yearmonth",
            name: "backnumber",
            component: Back,
            props: true
          }
        ]
      }
    )
  )
  .add(
    "Buttonのsample",
    withNotes(MarkdownText)(() => ({
      components: { Button },
      template: `
        <div style="display: flex;">
          <Button option1='is-success' option2='is-outlined'>保存</Button>
          <Button option1='is-info' option2='is-outlined'>戻る</Button>
        </div>`
    }))
  )
  .add(
    "IconButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { IconButton },
      template: `
        <div style="display: flex;">
          <IconButton option1='is-primary' option2='is-outlined' option3='is-large' iconoption='coffee'>make a new group</IconButton>
          <IconButton option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>check the backnumber</IconButton>
        </div>`
    }))
  )
  .add(
    "MkgroupIconbuttonのsample",
    withNotes(MarkdownText)(() => ({
      components: { MkgroupIconbutton },
      template: `
        <div style="display: flex;">
          <mkgroup-iconbutton option1='is-primary' option2='is-outlined' option3='is-large' iconoption='coffee'>make a new group</mkgroup-iconbutton>
        </div>`
    }))
  )
  .add(
    "BacknumbermenuIconbuttonのsample",
    withNotes(MarkdownText)(() => ({
      components: { BacknumbermenuIconbutton },
      template: `
        <div style="display: flex;">
          <backnumbermenu-iconbutton option1='is-info' option2='is-outlined' option3='is-large' iconoption='check'>check the backnumber</backnumbermenu-iconbutton>
        </div>`
    }))
  )
  .add(
    "BacknumbermonthButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { BacknumbermonthButton },
      data() {
        return {
          year:'2018'
        }
      },
      template: `
        <div style="display: flex;">
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='1'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='2'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='3'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='4'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='5'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='6'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='7'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='8'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='9'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='10'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='11'/>
        <backnumbermonth-button option1='is-info' option2='is-outlined' option3='is-large' iconoption='check' :year='year' :month='12'/>
        </div>`
    }))
  )
  .add(
    "CsvButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { CsvButton },
      data() {
        return{
          csvteam:[
            {"id":1,"グループ":1,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":2,"グループ":2,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":3,"グループ":3,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":4,"グループ":4,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":5,"グループ":5,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":6,"グループ":6,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":7,"グループ":7,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":8,"グループ":8,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":9,"グループ":9,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"},
            {"id":10,"グループ":10,"名前1":"test1","名前2":"test2","名前3":"test3","名前4":"test4"}
          ],
          csvcolume: ['グループ','名前1', '名前2', '名前3', '名前4'],
          csvfile:'test'
        }
      },
      template: `
        <div style="display: flex;">
          <csv-button :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile'>csv取得</csv-button>
        </div>`
    }))
  )
  .add(
    "CheckButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { CheckButton },
      data() {
        return{
          option1:'is-info',
          option2:'is-outlined',
          loading:''
        }
      },
      methods:{
        check(){
          console.log('test');
          this.loading = 'is-loading'
          if(this.loading === 'is-loading') {
            setTimeout(()=>{
              this.loading = '';
            }, 1000);
          }

        }
      },
      template: `
        <div style="display: flex;">
          <check-button :option1='option1' :option2='option2' :loading='loading' @check='check'>重複確認</check-button>
        </div>`
    }))
  )
  .add(
    "SaveButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { SaveButton },
      data() {
        return{
          option1:'is-success',
          option2:'is-outlined'
        }
      },
      methods:{
        save(){
          console.log('test')
        }
      },
      template: `
        <div style="display: flex;">
          <save-button :option1='option1' :option2='option2' @save='save'>保存</save-button>
        </div>`
    }))
  )
  .add(
    "FixButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { FixButton },
      data() {
        return{
          option1:'is-info',
          option2:'is-outlined'
        }
      },
      methods:{
        fix(){
          console.log('test')
        }
      },
      template: `
        <div style="display: flex;">
          <fix-button :option1='option1' :option2='option2' @fix='fix'>編集</fix-button>
        </div>`
    }))
  )
  .add(
    "ConfirmButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { ConfirmButton },
      data() {
        return{
          option1:'is-success',
          option2:'is-outlined'
        }
      },
      methods:{
        cofirm(){
          console.log('test')
        }
      },
      template: `
        <div style="display: flex;">
          <confirm-button :option1='option1' :option2='option2' @cofirm='cofirm'>確認</confirm-button>
        </div>`
    }))
  )
  .add(
    "MkgroupnewButtonのsample",
    withNotes(MarkdownText)(() => ({
      components: { MkgroupnewButton },
      data() {
        return{
          option1:'is-success',
          option2:'is-rounded'
        }
      },
      methods:{
        groupListMk(){
          console.log('groupListMk')
        }
      },
      template: `
        <div style="display: flex;">
          <mkgroupnew-button :option1='option1' :option2='option2' @groupListMk='groupListMk'>新規グループ作成</fix-button>
        </div>`
    }))
  );


  