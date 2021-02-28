import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import { NavigationActions } from 'react-navigation';

// import { Icon } from 'expo';

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingTop: 60,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  starLogo: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fb8400",
  },
});

function Header(props) {
  // const backAction = NavigationActions.back();

  // props.navigation.dispatch(backAction);

  return (
    <View style={styles.header}>
      <Text style={styles.starLogo}>✸</Text>
    </View>
  );
}

export default Header;
