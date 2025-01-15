import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

const wrapper = shallow(<Footer />);
describe("Footer component tests", () => {
  it("should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render the text Copyright", () => {
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});