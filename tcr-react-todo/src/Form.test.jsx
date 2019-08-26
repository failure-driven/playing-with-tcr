import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot(`<input />`);
  });
});
