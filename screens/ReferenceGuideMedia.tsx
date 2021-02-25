import React, {useEffect, useRef, useState} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Movies } from '../constants/MediaData';

const ReferenceGuideMedia = (props) => {
  const { route } = props;
  const { title, playlist } = route.params;

  const moviePlaylist = playlist.map(movieId => Movies.find(movie => movie.id === movieId));
  const [currentMovie, setCurrentMovie] = useState(moviePlaylist[0])
  const [movieIndex, setMovieIndex] = useState(1)
  const videoRef = useRef()

  const onPlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.error) {
      console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
    } else {
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        if(movieIndex < moviePlaylist.length){
          setCurrentMovie(moviePlaylist[movieIndex])
        }
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  };

  useEffect(() => {
   videoRef.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
   setMovieIndex(movieIndex + 1)
  }, [currentMovie])

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>{title}</Card.Title>
          <Video
            ref={videoRef}
            source={require(`../media/${currentMovie.file}`)}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping={false}
            style={styles.backgroundVideo}
          />
          <Text style={{marginBottom: 10}}>
            {currentMovie.description}
          </Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc9829',
  },
  backgroundVideo: {
    width: '100%',
    height: '40vh',
  },
});

export default ReferenceGuideMedia;
