import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from '@storybook/addon-notes'
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import NavbarItem from "./../../../components/atoms/Nav/NavbarItem.vue";

// router用のサンプル
const Home = { template: "<div>Home</div>"};
const About = { template: "<div>About</div>" };

storiesOf("atoms-nav", module)
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
    "NavbarItemのsample",
    withNotes(MarkdownText)(() => ({
      components: { NavbarItem },
      template: `
        <navbar-item />
      `
    }))
  );
