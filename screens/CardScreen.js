import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'expo';

// backButton = () => (
//   <Button iconLeft primary full>
//     <Icon.Ionicons
//       onPress={() => alert('This is a button!')}
//       name={
//         Platform.OS === 'ios'
//           ? 'ios-arrow-back'
//           : 'md-arrow-back'}
//     />
//     <Text>BACK</Text>
//   </Button>
// )

export default class CardScreen extends React.Component {
  // static navigationOptions = {
  //   headerLeft: backButton
  // };

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //   });
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={{ backgroundColor: '#fb8400' }}>
            <View>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>BALANCING ENERGY DISTRIBUTION</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: '#fb8400' }}>
          <View>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Opening and Repairing the Energy field: Knitting Movement</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
