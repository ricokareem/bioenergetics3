import React from 'react';
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

const InfoScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        {symptoms.map((item, index) => (
          <ListItem
            key={index}
            containerStyle={styles.listItem}
            onPress={() => navigation.navigate(item.name)}
            bottomDivider
          >
            <ListItem.Title style={styles.listText}>{item.title}</ListItem.Title>
            <ListItem.Chevron color='#fff' size={28} />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
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
