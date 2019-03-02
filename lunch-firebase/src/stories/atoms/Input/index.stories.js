import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, number } from '@storybook/addon-knobs';
import MarkdownText from "./MarkdownText.md";
import InputText from "./../../../components/atoms/Input/InputText.vue";


storiesOf("atoms-InputText", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    "InputTextのsample1",
    withNotes(MarkdownText)(() => {
      return {
        components: { InputText },
        data() {
          return {
            inputText: text('IconTextを入力してください。', 'これはアイコンテキスト用のテキストに利用します。')
          }
        },
        template: `<input-text :text="inputText"></input-text>`
      }
    }
  ));
