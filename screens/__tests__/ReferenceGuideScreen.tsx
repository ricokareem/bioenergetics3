import React from "react";
import { shallow } from "enzyme";
import ReferenceGuideScreen from "../ReferenceGuideScreen";

describe("<ReferenceGuideScreen>", () => {
  it("should match to snapshot", () => {
    const wrapper = shallow(<ReferenceGuideScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
