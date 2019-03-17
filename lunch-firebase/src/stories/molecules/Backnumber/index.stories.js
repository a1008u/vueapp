import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import BacknumberYearmonth from "./../../../components/molecules/Backnumber/BacknumberYearmonth.vue";

const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };
const Back = { template: "<div>Back</div>" };

storiesOf("molecules-Backnumber", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/", component: Home },
          { path: "/groupmk", component: Home },
          { path: "/backnumbermenu", component: About },
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
    "BacknumberYearmonthのsample",
    withNotes(MarkdownText)(() => ({
      components: { BacknumberYearmonth },
      data() {
        return {
          month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        }
      },
      template: `
        <div style="display: flex;">
          <backnumber-yearmonth year='2018' :month="month" />
        </div>`
    }))
  );
