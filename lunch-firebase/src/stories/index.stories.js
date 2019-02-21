import { storiesOf } from "@storybook/vue";

import MyButton from "./../components/MyButton.vue";

storiesOf("MyButton", module)
  .add("MyButtonのsample", () => ({
    components: { MyButton },
    template: `<MyButton>KEEP IT SIMPLE</MyButton>`
  }))
  .add("MyButtonのsample1", () => ({
    components: { MyButton },
    template: `<MyButton>KEEP IT SIMPLE</MyButton>`
  }));

storiesOf("MyButton2", module).add("MyButtonのsample", () => ({
  components: { MyButton },
  template: `<MyButton>sample button</MyButton>`
}));

