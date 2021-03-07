import React from "react";
import { shallow } from "enzyme";
import CardStackScreen from "../CardStackScreen";

describe("<CardStackScreen>", () => {
  it("should match to snapshot", () => {
    const wrapper = shallow(<CardStackScreen navigation={{ id: "test" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
