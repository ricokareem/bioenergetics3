import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const group1 = [
  { name: 'Cards', title: 'HEALING SEQUENCES' },
  { name: 'ReferenceGuide', title: 'SYMPTOMS AND CONDITIONS' },
];
const group2 = [
  { name: 'HowToUseAppScreen', title: 'HOW TO USE THIS APP' },
  {
    name: 'BeginningHealingSessionScreen',
    title: 'BEGINNING THE HEALING SESSION',
  },
  { name: 'AboutHealingTechniques', title: 'ABOUT THE HEALING TECHNIQUES' },
];

const MainMenuList = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        {group1.map((item, index) => (
          <ListItem
            key={index}
            containerStyle={styles.listItemRed}
            onPress={() => navigation.navigate(item.name)}
            bottomDivider
          >
            <ListItem.Title style={styles.listText}>{item.title}</ListItem.Title>
            <ListItem.Chevron color='#fff' size={28} />
          </ListItem>
        ))}
        {group2.map((item, index) => (
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
    paddingLeft: 20,
  },
});

export default MainMenuList;
