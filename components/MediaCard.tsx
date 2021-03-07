import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Video } from "expo-av";
import { Movies } from "../constants/MediaData";
import VideoSourceFiles from "../constants/VideoSourceFiles";

type MediaCardProps = {
  title: any;
  playlist: any;
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: windowWidth / 2,
    marginBottom: 24,
  },
});

export default function MediaCard(props: MediaCardProps): JSX.Element {
  const { title, playlist } = props;

  const moviePlaylist = playlist.map((playlistMovieId) =>
    Movies.find((movie) => movie.id === playlistMovieId)
  );
  const [currentMovie, setCurrentMovie] = useState(moviePlaylist[0]);
  const [nextMovieIndex, setMovieIndex] = useState(1);
  const videoRef = useRef<Video>();

  const videoSourceFile = VideoSourceFiles[currentMovie.file];

  const onPlaybackStatusUpdate = (playbackStatus) => {
    console.log(playbackStatus);
    if (playbackStatus.error) {
      console.log(
        `Encountered a fatal error during playback: ${playbackStatus.error}`
      );
    } else if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
      if (nextMovieIndex < moviePlaylist.length) {
        setCurrentMovie(moviePlaylist[nextMovieIndex]);
      }
      // The player has just finished playing and will stop. Maybe you want to play something else?
    }
  };

  useEffect(() => {
    videoRef.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setMovieIndex(nextMovieIndex + 1);
  }, [currentMovie]);

  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Video
        ref={videoRef}
        source={videoSourceFile}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        style={styles.backgroundVideo}
      />
      <Text style={{ marginBottom: 10 }}>{currentMovie.description}</Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="NOW"
      />
    </Card>
  );
}
