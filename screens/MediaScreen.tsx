import React, { ReactElement } from "react";
import { ScrollView, StyleSheet, Route } from "react-native";
import MediaCard from "../components/MediaCard";

type MediaScreenProps = {
  route: Route;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc9829",
  },
});

function MediaScreen({ route }: MediaScreenProps): ReactElement {
  const { title, playlist, showTimer } = route.params;

  return (
    <ScrollView style={styles.container}>
      <MediaCard title={title} playlist={playlist} showTimer={showTimer} />
    </ScrollView>
  );
}

export default MediaScreen;
