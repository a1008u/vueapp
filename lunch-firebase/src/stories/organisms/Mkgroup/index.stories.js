import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import MknewgroupmenuContents from "./../../../components/organisms/Mkgroup/MknewgroupmenuContents.vue";
import MknewgroupContents from "./../../../components/organisms/Mkgroup/MknewgroupContents.vue";

const Home = { template: "<div>Home</div>"};
const Back = { template: "<div>Back</div>" };


storiesOf("organisms-Mkgroup", module)
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
    "MknewgroupmenuContentsのsample",
    withNotes(MarkdownText)(() => ({
      components: { MknewgroupmenuContents },
      data() {
        return {}
      },
      methods:{
        groupListMk(upLoadArray, year, month, groupNumber, memberNumber){
          console.log(upLoadArray, year, month, groupNumber, memberNumber)
        }
      },
      template: `
        <div style="display: flex;">
          <mknewgroupmenu-contents @groupListMk='groupListMk'/>
        </div>`
    }))
  )
  .add(
    "MknewgroupContentsのsample",
    withNotes(MarkdownText)(() => ({
      components: { MknewgroupContents },
      data() {
        return {
          csvText:["小林浩介", "治田夏葉", "岡部翔太", "武山彩花", "村部真帆", "林由莉", "川辺美友紀", "有川健登", "高橋良成", "横越光", "古賀脩晟", "小野寺慶久", "青木大祐", "原田美沙子", "坂上ひろみ", "甘田光", "林田聡一朗", "高﨑北斗", "清水大地", "村上大将", "坂本拓豊", "千葉祐大", "三林達也", "大島優子", "間渕創", "奈木洸太", "吉田桂子", "鈴木翔", "久嶋秀人", "武川好太郎", "上沼諒輔", "上本英", "大野裕貴", "根本和央", "柳元佑介", "関春菜", "清水明士", "三笠善聖", "青木玲奈", "大迫綾乃"]
          , targetYear:'2018'
          , targetmonth:'05'
          , selectedTotalGroupNum:10
          , selectedMemberNum:4
        }
      },
      methods:{
      },
      template: `
        <div style="display: flex;">
          <MknewgroupContents :csvText='csvText' :targetYear='targetYear' :targetmonth='targetmonth' :selectedTotalGroupNum='selectedTotalGroupNum' :selectedMemberNum='selectedMemberNum'/>
        </div>`
    }))
  );
