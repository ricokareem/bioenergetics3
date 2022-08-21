import React, { ReactElement } from "react";
import { Route } from "react-native";
import { OrangeContainer } from "../components";
import MediaCard from "../components/MediaCard";

type MediaScreenProps = {
  route: Route;
};

function MediaScreen({ route }: MediaScreenProps): ReactElement {
  const { title, playlist, showTimer } = route.params;

  return (
    <OrangeContainer>
      <MediaCard title={title} playlist={playlist} showTimer={showTimer} />
    </OrangeContainer>
  );
}

export default MediaScreen;
