import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(<List items={[]} />);
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot(`<ul />`);
  });

  it("renders all the items", () => {
    const items = [
      {id: '123', text: 'todo 1'},
      {id: 'ABC', text: 'todo 2'},
    ]
    const wrapper = shallow(<List items={items} />);
    expect(wrapper.find("ul Item")).toHaveLength(2);
    expect(wrapper.find("ul Item").at(0).prop("item")).toEqual({id: '123', text: 'todo 1'});
    expect(wrapper.find("ul Item").at(1).prop("item")).toEqual({id: 'ABC', text: 'todo 2'});
  });
});
