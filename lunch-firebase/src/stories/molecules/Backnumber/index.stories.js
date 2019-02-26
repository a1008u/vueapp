import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import BacknumberYearmonth from "./../../../components/molecules/Backnumber/BacknumberYearmonth.vue";

const Home = {
  template: "<div>Home</div>"
};
const About = {
  template: "<div>About</div>"
};

storiesOf("molecules-Backnumber", module)
  .addDecorator(VueInfoAddon)
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
    "BacknumberYearmonthのsample",
    withNotes(MarkdownText)(() => ({
      components: { BacknumberYearmonth },
      template: `
        <div style="display: flex;">
          <backnumber-yearmonth></backnumber-yearmonth>
        </div>`
    }))
  );
