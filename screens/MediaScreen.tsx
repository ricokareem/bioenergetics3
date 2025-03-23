import React, { ReactElement } from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ClearScrollingContainer } from "../components";
import MediaCard from "../components/MediaCard";

type MediaScreenProps = {
  route: NavigatorScreenParams<any>;
};

function MediaScreen({ route }: MediaScreenProps): ReactElement {
  const { title, playlist, showTimer } = route.params;

  console.log("MediaScreen: title", title, playlist, showTimer);

  return (
    <ClearScrollingContainer>
      <MediaCard title={title} playlist={playlist} showTimer={showTimer} />
    </ClearScrollingContainer>
  );
}

export default MediaScreen;
