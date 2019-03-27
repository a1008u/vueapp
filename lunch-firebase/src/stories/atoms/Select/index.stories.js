import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";
import Select from "./../../../components/atoms/Select/Select.vue";

// router用のサンプル
const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };

storiesOf("atoms-select", module)
  .addDecorator(withInfo)
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
    "Selectのsample",
    withNotes(MarkdownText)(() => ({
      components: { Select },
      data() {
        return {
          yearoptions: [
            { text: '2019', value: '2019' },
            { text: '2020', value: '2020' },
            { text: '2021', value: '2021' },
            { text: '2022', value: '2022' },
            { text: '2023', value: '2023' },
            { text: '2024', value: '2024' },
            { text: '2025', value: '2025' },
          ],
          monthoptions: [
            { text: '1', value: '01'},
            { text: '2', value: '02' },
            { text: '3', value: '03' },
            { text: '4', value: '04' },
            { text: '5', value: '05' },
            { text: '6', value: '06' },
            { text: '7', value: '07' },
            { text: '8', value: '08' },
            { text: '9', value: '09' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
            { text: '12', value: '12' }
          ],
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 },
            { text: '11', value: 11 },
            { text: '12', value: 12 },
            { text: '13', value: 13 },
            { text: '14', value: 14 },
            { text: '15', value: 15 },
          ]
        }
      },
      methods:{
        selectValue(e) {
          console.log('---',e)
        }
      },
      template: `
        <div>
          年
          <Select :dateArray="yearoptions" @selectValue='selectValue'/>
          月
          <Select :dateArray="monthoptions" @selectValue='selectValue'/>
          グループ
          <Select :dateArray="options" @selectValue='selectValue'/>
          人数
          <Select :dateArray="options" @selectValue='selectValue'/>
        </div>
      `
    }))
  );
