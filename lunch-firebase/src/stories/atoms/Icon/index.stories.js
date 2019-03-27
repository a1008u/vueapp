import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import LunchIcon from "./../../../components/atoms/Icon/LunchIcon.vue";

// router用のサンプル
const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };

storiesOf("atoms-nav", module)
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
    "LunchIconのsample",
    withNotes(MarkdownText)(() => ({
      components: { LunchIcon },
      template: `
        <lunch-icon></lunch-icon>
      `
    }))
  );
