import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, number } from '@storybook/addon-knobs';
import MarkdownText from "./MarkdownText.md";
import BaseText from "./../../../components/atoms/Text/BaseText.vue";
import TitleText from "./../../../components/atoms/Text/TitleText.vue";
import SubtitleText from "./../../../components/atoms/Text/SubtitleText.vue";


storiesOf("atoms-Text", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
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
  ));
