import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, number } from '@storybook/addon-knobs';
import StoryRouter from "storybook-vue-router";
import MarkdownText from "./MarkdownText.md";
import BaseText from "./../../../components/atoms/Text/BaseText.vue";
import TitleText from "./../../../components/atoms/Text/TitleText.vue";
import SubtitleText from "./../../../components/atoms/Text/SubtitleText.vue";
import IconText from "./../../../components/atoms/Text/IconText.vue";
import ReturnhomeiconText from "./../../../components/atoms/Text/ReturnhomeiconText.vue";

const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };

storiesOf("atoms-Text", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: "/", component: Home },
      { path: "/groupmk", component: Home },
      { path: "/backnumbermenu", component: About }
    ]
  }
)
)
  .add(
    "BaseTextのsample1",
    withNotes(MarkdownText)(() => {
      const ButtonText = text('sampleTextを入力してください。', 'これはテキストとして利用します。')
      return {
        components: { BaseText },
        template: `<base-text label="${ButtonText}"></base-text>" />`
      }
    }
  ))
  .add(
    "TitleTextのsample1",
    withNotes(MarkdownText)(() => {
      const titleText = text('TitleTextを入力してください。', 'これはタイトル用のテキストに利用します。')
      return {
        components: { TitleText },
        template: `<title-text label="${titleText}"></title-text>" />`
      }
    }
  ))
  .add(
    "SubtitleTextのsample",
    withNotes(MarkdownText)(() => {
      const subtitleText = text('SubtitleTextを入力してください。', 'これはサブタイトル用のテキストに利用します。')
      return {
        components: { SubtitleText },
        template: `<subtitle-text label="${subtitleText}"></subtitle-text>" />`
      }
    }
  ))
  .add(
    "IconTextのsample",
    withNotes(MarkdownText)(() => {
      return {
        components: { IconText },
        data() {
          return {
            iconText: text('IconTextを入力してください。', 'これはアイコンテキスト用のテキストに利用します。','登録完了しました。')
          }
        },
        template: `
        <div style="display: flex;">
          <icon-text :text="iconText" iconoption='users'></icon-text>
          <icon-text :text="iconText" iconoption='user-circle'></icon-text>
          <icon-text :text="iconText" iconoption='check-circle'></icon-text>
        </div>`
      }
    }
  ))
  .add(
    "ReturnhomeiconTextのsample",
    withNotes(MarkdownText)(() => {
      return {
        components: { ReturnhomeiconText },
        data() {
          return {
            iconText: text('IconTextを入力してください。', 'これはアイコンテキスト用のテキストに利用します。','登録完了しました。')
          }
        },
        template: `
        <div style="display: flex;">
          <returnhomeicon-text :text="iconText" iconoption='check-circle'/>
        </div>`
      }
    }
  ));
