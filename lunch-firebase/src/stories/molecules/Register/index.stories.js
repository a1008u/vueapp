import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";

import RegisterSet from "./../../../components/molecules/Register/RegisterSet.vue";

storiesOf("molecules-RegisterSet", module)
  .addDecorator(withInfo)
  .add(
    "RegisterSetのsample",
    withNotes(MarkdownText)(() => ({
      components: { RegisterSet },
      data() {
        return {
          buttonState: false,
          registerState: false,
          resultUpdate: "test",
          loading:"",
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
          csvcolume: ["グループ", "名前1", "名前2", "名前3", "名前4"],
          csvfile: "test"
        };
      },
      methods:{
        save(e) {
          this.$emit('save', e)
          this.loading = 'is-loading'
          if(this.loading === 'is-loading') {
            setTimeout(()=>{
              this.loading = '';
            }, 1000);
          }
        },
        confirm(e) {
          this.$emit('confirm', e)
          this.buttonState = !this.buttonState
        },
        fix(e) {
          this.$emit('fix', e)
        },
        ck(e) {
          this.$emit('ck', e)
        }
      },
      template: `
        <register-set
          :registerState='registerState' :resultUpdate='resultUpdate'
          :buttonState='buttonState' :csvteam='csvteam' :csvcolume='csvcolume' :csvfile='csvfile' :loading='loading'
          @save='save' @confirm='confirm' @fix='fix' @check='ck'
        />
        `
    }))
  );