import React, { useCallback, useEffect, useRef, useState } from "react";
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
  title: string;
  playlist: number[];
  showTimer?: boolean;
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
  const [status, setStatus] = useState<AVPlaybackStatus>({
    isLoaded: false,
  } as AVPlaybackStatus);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMovie, setCurrentMovie] = useState(moviePlaylist[0]);
  const [nextMovieIndex, setMovieIndex] = useState(1);
  const videoRef = useRef<Video>();

  const videoSourceFile = VideoSourceFiles[currentMovie.file];

  const onPlaybackStatusUpdate = useCallback(
    (playbackStatus: AVPlaybackStatus) => {
      if (
        playbackStatus.isLoaded &&
        playbackStatus.didJustFinish &&
        !playbackStatus.isLooping
      ) {
        if (nextMovieIndex < moviePlaylist.length) {
          setCurrentMovie(moviePlaylist[nextMovieIndex]);
        }
        // The player has just finished playing and will stop. Maybe you want to play something else?
      } else {
        console.log(
          `Encountered a fatal error during playback: ${playbackStatus.error}`
        );
      }
    },
    []
  );

  const onPress = () => {
    setIsPlaying(!isPlaying);
    if (status.isLoaded && status.isPlaying) {
      videoRef.current.pauseAsync();
    } else if (status.isLoaded && !status.isPlaying) {
      videoRef.current.playAsync();
    }
  };

  useEffect(() => {
    videoRef.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setMovieIndex((i) => i + 1);
  }, [currentMovie, onPlaybackStatusUpdate]);

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
        // useNativeControls
        isLooping={false}
        style={styles.backgroundVideo}
        onPlaybackStatusUpdate={(newStatus) => setStatus(newStatus)}
      />
      <Text style={{ marginBottom: 10 }}>{currentMovie.description}</Text>
      {!!showTimer && (
        <>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60} // total duration in seconds
            colors={["#004777", "#F7B801", "#A30000"]}
            colorsTime={[30, 15, 0]}
          >
            {({ remainingTime, color }) => (
              <>
                <Animated.Text
                  style={{
                    color: color,
                    fontSize: 20,
                    margin: 6,
                  }}
                >
                  {timeDisplay({ remainingTime })}
                </Animated.Text>
                <View>
                  <TouchableOpacity onPress={onPress}>
                    <Feather
                      name={
                        !status.isLoaded || status.isPlaying
                          ? "pause-circle"
                          : "play-circle"
                      }
                      color={color}
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
