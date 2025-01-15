import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

const wrapper = shallow(<NotificationItem />);
describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});