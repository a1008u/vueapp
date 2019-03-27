import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import BacknumberList from "./../../../components/organisms/Backnumber/BacknumberList.vue";

const Home = { template: "<div>Home</div>"};
const Back = { template: "<div>Back</div>" };


storiesOf("organisms-Backnumber", module)
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
    "BacknumberYearmonthのsample",
    withNotes(MarkdownText)(() => ({
      components: { BacknumberList },
      data() {
        return {
          month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        }
      },
      template: `
        <div style="display: flex;">
          <backnumber-list></backnumber-list>
        </div>`
    }))
  );
