import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Playlists } from '../constants/MediaData';

const chevronProps = {
  color: '#fff',
  size: 28,
};

const ReferenceGuideScreen = (props) => {
  const { navigation } = props;
  // static navigationOptions = {
  //   title: 'Links',
  // };

  return (
    <View style={styles.container}>
      <ScrollView>
        {Playlists.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            containerStyle={styles.listItem}
            titleStyle={styles.listText}
            onPress={() => navigation.navigate(item.screen, {
              title: item.title,
              playlist: item.movieIds
            })}
            bottomDivider
            chevron={chevronProps}
          />
        ))}
      </ScrollView>
    </View>
  );
};

ReferenceGuideScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc9829',
  },
  listItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fc9829',
  },
  listText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14,
    color: '#fff',
  },
});

export default ReferenceGuideScreen;
