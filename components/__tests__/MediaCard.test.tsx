import React from "react";
import { shallow } from "enzyme";
import MediaCard from "../MediaCard";

describe("<MediaCard>", () => {
  it("should match to snapshot", () => {
    const wrapper = shallow(
      <MediaCard title="Media Screen" playlist={[81, 82]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

// IMPORT DATA & TEST ELEMENTS
