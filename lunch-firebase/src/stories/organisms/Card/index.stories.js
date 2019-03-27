import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import BaseCardset from "./../../../components/organisms/Card/BaseCardset.vue";
import CheckCardset from "./../../../components/organisms/Card/CheckCardset.vue";
import Cardset from "./../../../components/organisms/Card/Cardset.vue";

const Home = { template: "<div>Home</div>"};
const Back = { template: "<div>Back</div>" };


storiesOf("organisms-Card", module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/", component: Home },
          { path: "/groupmk", component: Home },
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
    "CheckCardsetのsample",
    withNotes(MarkdownText)(() => ({
      components: { CheckCardset },
      data() {
        return {
          outsState:true,
          outs:[[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]]],
        }
      },
      template: `
        <div style="display: flex;">
          <check-cardset :outs='outs' :groupindex=0 :index=0 :outsState='outsState'/>
        </div>`
    }))
  )
  .add(
    "BaseCardsetのsample",
    withNotes(MarkdownText)(() => ({
      components: { BaseCardset },
      data() {
        return {
          outsState:true,
          members:[{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}],
          outs:[[[['test1','test2','test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]]],
        }
      },
      template: `
        <div style="display: flex;">
          <base-cardset :outs='outs' :groupindex=0 :index=0 :members='members' :modeFix=true :outsState='outsState' />
        </div>`
    }))
  )
  .add(
    "Cardsetのsample",
    withNotes(MarkdownText)(() => ({
      components: { Cardset },
      data() {
        const d1 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        const d2 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        const d3 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        return {
          outsState:true,
          group:[[d1,d2,d3],[d1,d2,d3],[d1,d2,d3],[d1,d2,d3]],
          outs:[[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]],[[['test1','test2'],[],[]],[[],['test2','tes4'],[]],[[],[],[]],[[],[],[]]]],
        }
      },
      template: `
      <Cardset :group='group' :outs='outs' :modeFix=true :outsState='outsState' />`
    }))
  )
  .add(
    "Cardset(編集なし)のsample",
    withNotes(MarkdownText)(() => ({
      components: { Cardset },
      data() {
        const d1 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        const d2 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        const d3 = [{name:'test1'},{name:'test2'},{name:'test3'},{name:'test4'}];
        return {
          outsState:false,
          group:[[d1,d2,d3],[d1,d2,d3],[d1,d2,d3],[d1,d2,d3]],
          outs:[[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]]]
        }
      },
      template: `
      <cardset :group='group' :outs='outs' :modeFix=false :outsState='outsState'/>`
    }))
  );
