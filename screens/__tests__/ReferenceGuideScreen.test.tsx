import React from "react";
import { render } from "@testing-library/react-native";
import ReferenceGuideScreen from "../ReferenceGuideScreen";

describe("<ReferenceGuideScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(
      <ReferenceGuideScreen navigation={{ id: "test" }} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

// TEST BUTTON URLS & TITLES
