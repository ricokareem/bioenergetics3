import React from "react";
import { render } from "@testing-library/react-native";
import CardStackScreen from "../CardStackScreen";

describe("<CardStackScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(<CardStackScreen navigation={{ id: "test" }} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

// TEST BUTTON URLS & TITLES
