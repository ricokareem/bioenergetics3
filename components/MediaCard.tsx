import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  View,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import { AVPlaybackStatus, Video } from "expo-av";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Movies } from "../constants/MediaData";
import VideoSourceFiles from "../constants/VideoSourceFiles";

type MediaCardProps = {
  title: any;
  playlist: any;
  showTimer: boolean;
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: windowWidth / 2,
    marginBottom: 24,
  },
});

const timeDisplay = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes} min : ${seconds} sec`;
};

export default function MediaCard({
  title,
  playlist,
  showTimer,
}: MediaCardProps): JSX.Element {
  const moviePlaylist = playlist.map((playlistMovieId) =>
    Movies.find((movie) => movie.id === playlistMovieId)
  );
  const [status, setStatus] = useState<any>({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMovie, setCurrentMovie] = useState(moviePlaylist[0]);
  const [nextMovieIndex, setMovieIndex] = useState(1);
  const videoRef = useRef<Video>();

  const videoSourceFile = VideoSourceFiles[currentMovie.file];

  const onPlaybackStatusUpdate = (playbackStatus) => {
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

  const onPress = () => {
    setIsPlaying(!isPlaying);
    status.isPlaying
      ? videoRef.current.pauseAsync()
      : videoRef.current.playAsync();
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
        useNativeControls
        isLooping={false}
        style={styles.backgroundVideo}
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
      <Text style={{ marginBottom: 10 }}>{currentMovie.description}</Text>
      {!!showTimer && (
        <>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60} // total duration in seconds
            colors={[
              ["#004777", 0.4],
              ["#F7B801", 0.4],
              ["#A30000", 0.2],
            ]}
          >
            {({ remainingTime, animatedColor }) => (
              <>
                <Animated.Text
                  style={{
                    color: animatedColor,
                    fontSize: 20,
                    margin: 6,
                  }}
                >
                  {timeDisplay({ remainingTime })}
                </Animated.Text>
                <View>
                  <TouchableOpacity onPress={onPress}>
                    <Feather
                      name={status.isPlaying ? "pause-circle" : "play-circle"}
                      // color={animatedColor}
                      size={48}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </CountdownCircleTimer>
        </>
      )}
    </Card>
  );
}
