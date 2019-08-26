import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot(`<ul />`);
  });
});
