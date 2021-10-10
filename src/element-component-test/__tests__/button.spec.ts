import { mount } from "@cypress/vue";
import ButtonComp from "../button.vue";

describe("按钮 type 类型生效", () => {
  it("type=primary 有class", () => {
    mount(ButtonComp);
    cy.get("button").should("have.class", "el-button--primary");
  });
});
