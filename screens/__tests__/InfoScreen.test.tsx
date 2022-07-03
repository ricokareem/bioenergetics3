import React from "react";
import { render } from "@testing-library/react-native";
import InfoScreen from "../InfoScreen";

describe("<InfoScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON, getAllByTestId, getByText } = render(
      <InfoScreen navigation={{ id: "test" }} />
    );
    const ListItemButtons = getAllByTestId("padView");

    expect(ListItemButtons).toHaveLength(4);
    expect(getByText(/about/i));
    expect(getByText(/disclaimer/i));
    expect(getByText(/follow us/i));
    expect(getByText(/credits/i));
    expect(toJSON()).toMatchSnapshot();
  });
});
