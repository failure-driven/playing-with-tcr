import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("input").prop("value")).toEqual("");
    expect(wrapper.find("input").prop("autoFocus")).toBeTruthy();
    expect(wrapper).toMatchInlineSnapshot(`
      <input
        autoFocus={true}
        onChange={[Function]}
        onKeyDown={[Function]}
        value=""
      />
    `);
  });

  it("stores value that is typed into input and addItem on return and resets the input", () => {
    const addItem = jest.fn();
    const wrapper = shallow(<Form addItem={addItem} />);
    wrapper.find("input").simulate("change", { target: { value: "a todo" } });
    expect(wrapper.find("input").prop("value")).toEqual("a todo");
    wrapper.find("input").simulate("keyDown", { key: "Enter" });
    expect(addItem).toBeCalledWith("a todo");
    expect(wrapper.find("input").prop("value")).toEqual("");
  });
});
