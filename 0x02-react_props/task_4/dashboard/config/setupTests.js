import { configure } from "enzyme";
import Adapter from "@types/jest/enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
