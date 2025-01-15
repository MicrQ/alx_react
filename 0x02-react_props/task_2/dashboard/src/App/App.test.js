import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

const component = shallow(<App />);
describe("App tests", () => {
  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    expect(component.contains(<Footer />)).toBe(true);
  });
});