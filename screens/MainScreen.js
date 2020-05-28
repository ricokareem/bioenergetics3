import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ListItem } from 'react-native-elements';

const RolandStar = () => (
  <Text style={styles.starLogo}>✸</Text>
);

const group1 = [
  {name: 'Cards', title: 'HEALING SEQUENCES'},
  {name: 'ReferenceGuide', title: 'SYMPTOMS AND CONDITIONS'},
];
const group2 = [
  {name: 'Cards', title: 'HOW TO USE THIS APP'},
  {name: 'Cards', title: 'BEGINNING THE HEALING SESSION'},
  {name: 'Cards', title: 'ABOUT THE HEALING TECHNIQUES'},
];

const chevronProps = {
  color: "#fff",
  size: 28,
}

const MainMenuList = (props) => {
  const { navigation } = props;
  const navigationOptions = {
    headerLeft: RolandStar
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {group1.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            containerStyle={styles.listItemRed}
            titleStyle={styles.listText}
            onPress={() => navigation.navigate(item.name)}
            bottomDivider
            chevron={chevronProps}
          />
        ))}
        {group2.map((item, index) => (
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

MainMenuList.propTypes = {
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
  listItemRed: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fb8400',
  },
  listText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14,
    color: '#fff',
  },
  starLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fb8400',
    paddingLeft: 20
  }
});

export default MainMenuList;
