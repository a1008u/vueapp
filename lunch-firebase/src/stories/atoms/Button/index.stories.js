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
  );
