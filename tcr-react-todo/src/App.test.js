import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Form")).toHaveLength(1);
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      React app goes here!
      <Form />
    </div>
  `);
});
