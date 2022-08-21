import React, { ReactElement } from "react";
import { Route } from "react-native";
import { ClearScrollingContainer } from "../components";
import MediaCard from "../components/MediaCard";

type MediaScreenProps = {
  route: Route;
};

function MediaScreen({ route }: MediaScreenProps): ReactElement {
  const { title, playlist, showTimer } = route.params;

  return (
    <ClearScrollingContainer>
      <MediaCard title={title} playlist={playlist} showTimer={showTimer} />
    </ClearScrollingContainer>
  );
}

export default MediaScreen;
