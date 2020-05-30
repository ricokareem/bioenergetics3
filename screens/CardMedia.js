import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { Video } from 'expo-av';

const CardMedia = (props) => {
  const { route } = props;
  const { title, mediaSrc, description } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card
        title={title}
      >
        <Video
          source={require(`../media/${mediaSrc}`)}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.backgroundVideo}
        />
        <Text style={{marginBottom: 10}}>
          {description}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='NOW'
        />
      </Card>
    </ScrollView>
  );
};

CardMedia.propTypes = {
  route: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    params: PropTypes.object,
  }),
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
