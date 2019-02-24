import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import Navbar from "./../../../components/molecules/Nav/Navbar.vue";

const Home = {
  template: "<div>Home</div>"
};
const About = {
  template: "<div>About</div>"
};

storiesOf("molecules-Nav", module)
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
    "Navbarのsample",
    withNotes(MarkdownText)(() => ({
      components: { Navbar },
      template: `
        <div style="display: flex;">
          <navbar></navbar>
        </div>`
    }))
  );
