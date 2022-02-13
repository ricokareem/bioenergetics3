import React from "react";
import { map } from "lodash";
import { render } from "@testing-library/react-native";
import ReferenceGuideScreen from "../ReferenceGuideScreen";
import { SymptomsPlaylists } from "../../constants/MediaData";

describe("<ReferenceGuideScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON, getAllByTestId, getByText } = render(
      <ReferenceGuideScreen navigation={{ id: "test" }} />
    );
    const ListItemButtons = getAllByTestId("padView");
    const titles = map(SymptomsPlaylists, (playlist) => playlist.title);

    expect(ListItemButtons).toHaveLength(15);
    titles.forEach((title) => {
      expect(getByText(title));
    });
    expect(toJSON()).toMatchSnapshot();
  });
});

// TEST BUTTON URLS & TITLES
