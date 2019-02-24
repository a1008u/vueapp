import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import Button from "./../../../components/atoms/Button/Button.vue";
import IconButton from "./../../../components/atoms/Button/IconButton.vue";
import MkgroupIconbutton from "./../../../components/atoms/Button/MkgroupIconbutton.vue";
import BacknumbermenuIconbutton from "./../../../components/atoms/Button/BacknumbermenuIconbutton.vue";

// router用のサンプル
const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };

storiesOf("atoms-button", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/groupmk", component: Home },
          { path: "/backnumbermenu", component: About }
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
  );
