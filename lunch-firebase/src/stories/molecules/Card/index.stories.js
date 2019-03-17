import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";
import { withKnobs, text, number } from '@storybook/addon-knobs';

import BaseCard from "./../../../components/molecules/Card/BaseCard.vue";
import HeaderCard from "./../../../components/molecules/Card/HeaderCard.vue";
import CheckCard from "./../../../components/molecules/Card/CheckCard.vue";
import InputyearmonthCard from "./../../../components/molecules/Card/InputyearmonthCard.vue";
import InputgroupmemberCard from "./../../../components/molecules/Card/InputgroupmemberCard.vue";
import UploadFileCard from "./../../../components/molecules/Card/UploadFileCard.vue";



const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };
const Back = { template: "<div>Back</div>" };

storiesOf("molecules-Card", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/", component: Home },
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
    "BaseCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { BaseCard },
      data() {
        return {
          month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          modeFix:true
        }
      },
      template: `
        <div style="display: flex;">
          <base-card previewText='2018' inputText="month" :modeFix='modeFix'/>
        </div>`
    }))
  )
  .add(
    "HeaderCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { HeaderCard },
      data() {
        return {
          previewText: text('previewTextを入力してください。', 'ここにCardのタイトルテキストを記載')
        }
      },
      template: `
        <div style="display: flex;">
          <header-card :previewText='previewText'/>
        </div>`
    }))
  )
  .add(
    "CheckCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { CheckCard },
      data() {
        return {
          out:[[['test1','test2','test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],
          checkcount:1,
          option1: 'is-danger'
        }
      },
      template: `
        <div style="display: flex;">
          <check-card :out='out' :groupindex=0 :index=0 :checkcount=checkcount :option1='option1'/>
        </div>`
    }))
  ).add(
    "InputyearmonthCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { InputyearmonthCard },
      data() {
        return {
        }
      },
      methods:{
        selectValueYear(e) {
          console.log('molecules', e)
        },
        selectValueMonth(e) {
          console.log('molecules', e)
        }
      },
      template: `
        <div style="display: flex;">
          <inputyearmonth-card @selectValueYear='selectValueYear' @selectValueMonth='selectValueMonth'/>
        </div>`
    }))
  ).add(
    "InputgroupmemberCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { InputgroupmemberCard },
      data() {
        return {
        }
      },
      methods:{
        selectGroup(e) {
          console.log('molecules', e)
        },
        selectMember(e) {
          console.log('molecules', e)
        }
      },
      template: `
        <div style="display: flex;">
          <inputgroupmember-card @selectGroup='selectGroup' @selectMember='selectMember'/>
        </div>`
    }))
  ).add(
    "UploadFileCardのsample",
    withNotes(MarkdownText)(() => ({
      components: { UploadFileCard },
      data() {
        return {
        }
      },
      methods:{
        setCsvtext(upLoadArray) {
          console.log('molecules', upLoadArray)
        }
      },
      template: `
        <div style="display: flex;">
          <uploadFile-card @setCsvtext='setCsvtext'/>
        </div>`
    }))
  );