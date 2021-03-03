import React from "react";
import { shallow } from "enzyme";
import MainScreen from "../MainScreen";

describe("<MainScreen>", () => {
  it("should match to snapshot", () => {
    const wrapper = shallow(<MainScreen navigation={{ id: "test" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
