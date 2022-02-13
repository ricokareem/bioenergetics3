import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import MediaScreen from "../MediaScreen";

describe("<MediaScreen>", () => {
  it("should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <MediaScreen
          route={{ params: { title: "Media Screen", playlist: [81, 82] } }}
        />
      )
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
