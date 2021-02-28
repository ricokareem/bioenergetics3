import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

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

const AboutRoland = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text>About Roland Yakoubov</Text>
      <Text>
        Roland Yakoubov is a graduate of the United Nation's Academy of
        Alternative Medical Science, and was awarded the Gold Star of Excellence
        in Diagnostics and Healing. In 1983, the Russian government granted two
        million dollars in grants and research funding to Roland and his aunt,
        Djuna Davitashvili, who developed these techniques. However, in the
        1990's Roland moved to the US to practice his techniques abroad. His
        techniques were instantly acknowledged by major celebrities and
        dignitaries, as they experienced the positive results of his healings.
        Some of his clients have included Jennifer Lopez, Dustin Hoffman&#39;s
        mother, Rosanna DeSoto, Matthew Vanleeuwen, the Khashoggi family, as
        well as Princess Diana who Roland was scheduled to meet one week prior
        to her passing.
      </Text>
    </ScrollView>
  );
};

export default AboutRoland;
