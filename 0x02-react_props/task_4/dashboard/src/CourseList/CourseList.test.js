import React from "react";
import CourseLIst from "./CourseLIst";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

const wrapper = shallow(<CourseLIst />);
describe("CourseLIst component tests", () => {
  it("should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  });
});