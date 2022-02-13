import React from "react";
import { render } from "@testing-library/react-native";
import MediaCard from "../MediaCard";

describe("<MediaCard>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(
      <MediaCard title="Media Screen" playlist={[81, 82]} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

// IMPORT DATA & TEST ELEMENTS
