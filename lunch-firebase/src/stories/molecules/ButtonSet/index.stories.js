import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";

import ButtonSet from "./../../../components/molecules/Button/ButtonSet.vue";

storiesOf("molecules-ButtonSet", module)
  .addDecorator(VueInfoAddon)
  .add(
    "ButtonSetのsample",
    withNotes(MarkdownText)(() => ({
      components: { ButtonSet },
      data() {
        return {
          buttonState: false
        };
      },
      methods:{
        save(e) {
          this.$emit('save', e)
        },
        confirm(e) {
          this.$emit('confirm', e)
        },
        fix(e) {
          this.$emit('fix', e)
        },
        ck(e) {
          this.$emit('ck', e)
        }
      },
      template: `
        <button-set :buttonState='buttonState' @save='save' @confirm='confirm' @fix='fix' @check='ck' />
        `
    }))
  );