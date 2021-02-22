import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HowToUseAppScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ marginBottom: 10 }}>How to use this app</Text>
      <Text>
        Before perfoming any of the full healing programs, we advise
        you to familiarize yourself with the 13 Healing Sequences.
        Read the description for each of the movements thoroughly and then watch the video for practice.

        Once familiar with the movements, search the list of symptoms
        and conditions for the ones that describe what you suffer from.

        Follow along with the video and perform as indicated.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fc9829',
  },
  // listItem: {
  //   backgroundColor: '#fc9829',
  //   flex: 1,
  //   flexDirection: 'column',
  //   margin: 1,
  //   padding: '20px',
  //   height: 120,
  // },
  // listText: {
  //   fontSize: 12,
  //   fontWeight: 'bold',
  //   lineHeight: 14,
  //   color: '#fff',
  // },
  // listSubheadingText: {
  //   fontSize: 10,
  //   lineHeight: 12,
  //   color: '#fff',
  // },
});

export default HowToUseAppScreen;
