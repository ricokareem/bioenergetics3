import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

const symptoms = [
  {name: 'AboutRoland', title: 'ABOUT ROLAND YAKOUBOV'},
  {name: 'Disclaimer', title: 'DISCLAIMER'},
  {name: 'Social', title: 'FOLLOW US'},
  {name: 'Credits', title: 'CREDITS'},
];

const chevronProps = {
  color: "#fff",
  size: 28,
}

const InfoScreen = (props) => {
  const { navigation } = props;
  // static navigationOptions = {
  //   title: 'Links',
  // };

  return (
    <View style={styles.container}>
      <ScrollView>
        {symptoms.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            containerStyle={styles.listItem}
            titleStyle={styles.listText}
            onPress={() => navigation.navigate(item.name)}
            bottomDivider
            chevron={chevronProps}
          />
        ))}
      </ScrollView>
    </View>
  );
}

InfoScreen.propTypes = {
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

export default InfoScreen;
