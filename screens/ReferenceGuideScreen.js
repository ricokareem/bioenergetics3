import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

const symptoms = [
  {name: 'Cards', title: 'MIGRAINE/HEADACHES'},
  {name: 'Cards', title: 'NECK PAIN'},
  {name: 'Cards', title: 'OVERALL BODY PAIN'},
  {name: 'Cards', title: 'GASTRIC/STOMACH PAIN/SPASMS'},
  {name: 'Cards', title: 'DIARRHEA'},
  {name: 'Cards', title: 'CHRONIC CONSTIPATION'},
  {name: 'Cards', title: 'FLU'},
  {name: 'Cards', title: 'BLADDER PAIN'},
  {name: 'Cards', title: 'PMS/CRAMPS'},
  {name: 'Cards', title: 'DEMENTIA'},
  {name: 'Cards', title: 'THYROID'},
  {name: 'Cards', title: 'KNEE PAIN'},
  {name: 'Cards', title: 'LEG PAIN/CRAMPS'},
];

const chevronProps = {
  color: "#fff",
  size: 28,
}

const ReferenceGuideScreen = (props) => {
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
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default ReferenceGuideScreen;
