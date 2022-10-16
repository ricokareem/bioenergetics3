import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import App from "../App";
import { isLoaded, useFonts } from "expo-font";

jest.mock("expo-font");

describe("<App>", () => {
  beforeEach(() => {
    useFonts.mockReturnValue([isLoaded, true]);
  });
  it("should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<App />));

    expect(toJSON()).toMatchSnapshot();
  });
});
