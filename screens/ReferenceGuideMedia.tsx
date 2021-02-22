import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Video } from 'expo-av';
import { Movies } from '../constants/MediaData';

const ReferenceGuideMedia = (props) => {
  const { route } = props;
  const { title, playlist } = route.params;

  const movieMap = playlist.map(movie => Movies.find(movie.id));

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>{title}</Card.Title>
        {movieMap.map(movie => (
          <>
            <Video
              // source={require(`../media/${movie.file}`)}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              style={styles.backgroundVideo}
            />
            <Text style={{marginBottom: 10}}>
              {movie.description}
            </Text>
          </>
        ))}
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
