import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
/*import React from "react";
import App from "./App";
import { shallow } from "enzyme";

const app = shallow(<App />);
describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    expect(app.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    expect(app.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    expect(app.find(".App-footer")).toBeDefined();
  });
});*/