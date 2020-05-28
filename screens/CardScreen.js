import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

const symptoms = [
  { name: 'Cards', title: 'BALANCING ENERGY DISTRIBUTION' },
  { name: 'Cards', title: 'OPENING AND REPAIRING THE ENERGY FIELD: KNITTING MOVEMENT' },
  { name: 'Cards', title: 'ENERGIZING SEQUENCE: MOBILIZATION OF CHI ENERGY' },
  { name: 'Cards', title: 'SCISSORS MOVEMENT', subheading: 'apply to the specific area of concern' },
  { name: 'Cards', title: 'PINCH OF SALT', subheading: 'apply to the specific area of concern' },
  { name: 'Cards', title: 'PRESSING SEQUENCE', subheading: 'apply to the specific area of concern' },
  { name: 'Cards', title: 'SPIRAL PULLING', subheading: 'apply to the specific area of concern' },
  { name: 'Cards', title: 'CLOCKWISE & COUNTERCLOCKWISE CIRCULAR MOTION: TO RESET THE CHI' },
  { name: 'Cards', title: 'DIRECTING ENERGY FLOW' },
  { name: 'Cards', title: 'ENERGY "FLOSSING": UNBLOCKING ENERGY PATHWAYS' },
  { name: 'Cards', title: 'ENERGY COCOONING: ENERGY FIRMING OR SHIELDING' },
  { name: 'Cards', title: 'CONTACT HEALING' },
  { name: 'Cards', title: 'ENDING THE HEALING SESSION' },
  { name: null, title: '' },
];

const chevronProps = {
  color: "#fff",
  size: 28,
}

const CardScreen = (props) => {
  // static navigationOptions = {
  //   title: 'Links',
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={symptoms}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              {item.title}
            </Text>
            <Text style={styles.listSubheadingText}>
              {item.subheading}
            </Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

CardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    backgroundColor: '#fc9829',
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    padding: '20px',
    height: 120,
  },
  listText: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    color: '#fff',
  },
  listSubheadingText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#fff',
  },
});

export default CardScreen;
