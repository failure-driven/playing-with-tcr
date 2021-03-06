import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { JestEnvironment } from "@jest/environment";

jest.mock("uuid/v4");

it("renders", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Pairing Talk Todo");
  expect(wrapper.find("Form").prop("addItem")).toHaveLength(1);
  expect(wrapper.find("List").prop("items")).toEqual([]);
  expect(wrapper.find("List").prop("removeItem")).toHaveLength(1);
  expect(wrapper.find("List").prop("toggleItem")).toHaveLength(1);
  expect(wrapper).toMatchInlineSnapshot(`
    <div
      className="todo"
    >
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
        removeItem={[Function]}
        toggleItem={[Function]}
      />
    </div>
  `);
});

it("adds items", () => {
  const uuidMock = require("uuid/v4");
  uuidMock.mockImplementationOnce(() => "123");

  const wrapper = shallow(<App />);
  expect(wrapper.find("List").prop("items")).toEqual([]);
  wrapper.find("Form").prop("addItem")("a todo item");
  expect(wrapper.find("List").prop("items")).toEqual([
    {
      id: "123",
      ordinal: 1,
      text: "a todo item",
      isComplete: false,
      isEditing: false
    }
  ]);

  uuidMock.mockImplementationOnce(() => "abc");
  wrapper.find("Form").prop("addItem")("another todo");
  expect(wrapper.find("List").prop("items")).toEqual([
    {
      id: "123",
      ordinal: 1,
      text: "a todo item",
      isComplete: false,
      isEditing: false
    },
    {
      id: "abc",
      ordinal: 2,
      text: "another todo",
      isComplete: false,
      isEditing: false
    }
  ]);
});

describe("when there are a number of todo items", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App />);

    const uuidMock = require("uuid/v4");
    uuidMock.mockImplementationOnce(() => "123");
    wrapper.find("Form").prop("addItem")("a todo item");

    uuidMock.mockImplementationOnce(() => "abc");
    wrapper.find("Form").prop("addItem")("another todo");
  });

  it("marks items as complete", () => {
    wrapper.find("List").prop("toggleItem")("123");
    expect(wrapper.find("List").prop("items")).toEqual([
      {
        id: "123",
        ordinal: 1,
        text: "a todo item",
        isComplete: true,
        isEditing: false
      },
      {
        id: "abc",
        ordinal: 2,
        text: "another todo",
        isComplete: false,
        isEditing: false
      }
    ]);
  });

  it("deletes items", () => {
    wrapper.find("List").prop("removeItem")("123");
    expect(wrapper.find("List").prop("items")).toEqual([
      {
        id: "abc",
        ordinal: 1,
        text: "another todo",
        isComplete: false,
        isEditing: false
      }
    ]);
  });
});
