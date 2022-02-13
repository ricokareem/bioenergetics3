import React from "react";
import { render } from "@testing-library/react-native";
import MainScreen from "../MainScreen";

describe("<MainScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(<MainScreen navigation={{ id: "test" }} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
