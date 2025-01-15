import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

const wrapper = shallow(<Login />);
describe("Login component tests", () => {
  it("should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("should have 2 input tags and 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});