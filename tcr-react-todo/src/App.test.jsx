import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Pairing Talk Todo");
  expect(wrapper.find("Form").prop("addItem")).toHaveLength(1);
  expect(wrapper.find("List").prop("items")).toEqual([]);
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      <h1>
        Pairing Talk Todo
      </h1>
      <h3>
        An easy way to sort out your tasks, fast and efficient
      </h3>
      <Form
        addItem={[Function]}
      />
      <List
        items={Array []}
      />
    </div>
  `);
});
