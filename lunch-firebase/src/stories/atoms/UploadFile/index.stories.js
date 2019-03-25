import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text} from '@storybook/addon-knobs';
import MarkdownText from "./MarkdownText.md";
import UploadFile from "./../../../components/atoms/Upload/UploadFile.vue";


storiesOf("molecules-Upload", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    "UploadFileのsample1",
    withNotes(MarkdownText)(() => {
      return {
        components: { UploadFile },
        methods:{
          setCsvtext(upLoadArray) {
            console.log('molecules', upLoadArray)
          }
        },
        data() {
          return {
            InputFile: text('IconTextを入力してください。', 'これはアイコンテキスト用のテキストに利用します。')
          }
        },
        template: `<upload-file @set-csvtext='setCsvtext'/>`
      }
    }
  ));
