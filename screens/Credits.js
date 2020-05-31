import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, StyleSheet } from "react-native";

const Credits = (props) => {
  return (
  <ScrollView style={styles.container}>
  <Text>Credits</Text>
  <Text>
    dl
    dt Lead Designer
      dd Sal Camacho
    dt Lead Software Developer
      dd Rico Rodriquez Collins
    dt Model
      dd Stephanie Markel
    dt Camera DP
      dd Danny Deschamps
    dt Audio Recording and Music
      dd Ricky Godinez
  </Text>
  </ScrollView>
  );
};

Credits.propTypes = {};

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

export default Credits;
