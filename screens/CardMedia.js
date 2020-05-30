import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { Video } from 'expo-av';

const CardMedia = (props) => {

  return (
    <Card
      title='HELLO WORLD'
    >
      <View>

        <Video
          // source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          source={require('../media/1.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.backgroundVideo}
        />

        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW'
        />
      </View>
    </Card>
  );
};

CardMedia.propTypes = {
  // navigation: PropTypes.shape({
  //   navigate: PropTypes.func,
  // }).isRequired,
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '40vh',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // listItem: {
  //   backgroundColor: '#fc9829',
  //   flex: 1,
  //   flexDirection: 'column',
  //   margin: 1,
  //   padding: '20px',
  //   height: 120,
  // },
  // listText: {
  //   fontSize: 12,
  //   fontWeight: 'bold',
  //   lineHeight: 14,
  //   color: '#fff',
  // },
  // listSubheadingText: {
  //   fontSize: 10,
  //   lineHeight: 12,
  //   color: '#fff',
  // },
});

export default CardMedia;
