import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("input").prop("value")).toEqual("");
    expect(wrapper).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        value=""
      />
    `);
  });

  it("stores value that is typed into input", () => {
    const wrapper = shallow(<Form />);
    wrapper.find("input").simulate("change", { target: { value: "a todo" } });
    expect(wrapper.find("input").prop("value")).toEqual("a todo");
  });
});
