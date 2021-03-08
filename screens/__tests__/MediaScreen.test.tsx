import React from "react";
import { shallow } from "enzyme";
import MediaScreen from "../MediaScreen";

describe("<MediaScreen>", () => {
  it("should match to snapshot", () => {
    const wrapper = shallow(
      <MediaScreen
        route={{ params: { title: "Media Screen", playlist: [81, 82] } }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
