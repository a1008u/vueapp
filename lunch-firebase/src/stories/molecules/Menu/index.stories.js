import { storiesOf } from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import { withNotes } from "@storybook/addon-notes";
import MarkdownText from "./MarkdownText.md";
import StoryRouter from "storybook-vue-router";

import Menuset from "./../../../components/molecules/Menu/MenuSet.vue";

const Home = {
  template: "<div>Home</div>"
};
const About = {
  template: "<div>About</div>"
};

storiesOf("molecules-menu", module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter({}, {
        routes: [
          { path: "/groupmk", component: Home },
          { path: "/backnumbermenu", component: About }
        ]
      }
    )
  )
  .add(
    "Menusetのsample",
    withNotes(MarkdownText)(() => ({
      components: { Menuset },
      template: `
        <div style="display: flex;">
          <Menuset></Menuset>
        </div>`
    }))
  );
