import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import App from "../App";

describe("<App>", () => {
  it("should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<App />));

    expect(toJSON()).toMatchSnapshot();
  });
});
