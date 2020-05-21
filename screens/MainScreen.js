import React from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  SectionList,
  StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const RolandStar = () => (
  <Text style={styles.starLogo}>✸</Text>
)

const onPressLearnMore = () => (null);

export default class MainMenuList  extends React.Component {
  static navigationOptions = {
    headerLeft: RolandStar
  };

  render() {
    return (
      <SectionList
        keyExtractor={(section, index)=> `${section.title}-${index}`}
        style={styles.container}
        sections={[{
          title: 'group1',
          data: [
            'HEALING SEQUENCES',
            'SYMPTOMS AND CONDITIONS'
          ]},
          {
          title: 'group2',
          data: [
            'HOW TO USE THIS APP',
            'BEGINNING THE HEALING SESSION',
            'ABOUT THE HEALING TECHNIQUES'
          ]},
        ]}
        renderItem={({ item, index, section }) => (
          <TouchableOpacity
            style={section.title==='group1'
              ? styles.listItemRed
              : styles.listItem}
              onPress={() =>
                this.props.navigator.push({component: LinksScreen})
              }
          >
            <Text style={styles.listText}>
              {item}
            </Text>
            <Ionicons
              style={styles.listIcon}
              name={
                Platform.OS === 'ios'
                  ? 'ios-arrow-forward'
                  : 'md-arrow-forward'}
            />
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc9829'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listItemRed: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fb8400'
  },
  listText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  starLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fb8400',
    paddingLeft: 20
  }
});
