import React from "react";
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

const MediaScreen: React.FC<MediaScreenProps> = (props) => {
  const { route } = props;
  const { title, playlist } = route.params;

  return (
    <ScrollView style={styles.container}>
      <MediaCard title={title} playlist={playlist} />
    </ScrollView>
  );
};

export default MediaScreen;
