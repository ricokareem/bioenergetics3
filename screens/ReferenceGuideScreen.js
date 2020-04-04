import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ReferenceGuideScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: '#fb8400' }}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.ViewText}>BALANCING ENERGY DISTRIBUTION</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc9829'
  },
  TouchableOpacity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  ViewText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  ViewIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
