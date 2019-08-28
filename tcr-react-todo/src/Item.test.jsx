import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

describe("WHEN rendered", () => {
  it("THEN renders", () => {
    const wrapper = shallow(
      <Item
        item={{ text: "an item", isComplete: false }}
        toggleItem={jest.fn()}
      />
    );
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li input").prop("type")).toEqual("checkbox");
    expect(wrapper.find("li input").prop("checked")).toEqual(false);
    expect(
      wrapper
        .find("li span")
        .at(1)
        .text()
    ).toEqual("an item");
    expect(wrapper).toMatchInlineSnapshot(`
      <li>
        <input
          checked={false}
          onChange={[Function]}
          type="checkbox"
        />
        <span
          className="checkmark"
          onClick={[Function]}
        />
        <span
          className={false}
        >
          an item
        </span>
      </li>
    `);
  });

  it("calls toggleItem when checkbox is checked", () => {
    const mockToggleItem = jest.fn();
    const wrapper = shallow(
      <Item
        item={{ id: "123", text: "an item" }}
        toggleItem={mockToggleItem}
      />
    );
    wrapper.find("li .checkmark").simulate("click");
    expect(mockToggleItem).toHaveBeenCalledWith("123");
  });
});
