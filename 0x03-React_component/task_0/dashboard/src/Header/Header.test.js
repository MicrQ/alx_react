import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

const wrapper = shallow(<Header />);
describe("Header component tests", () => {
  it("render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render a h1", () => {
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});