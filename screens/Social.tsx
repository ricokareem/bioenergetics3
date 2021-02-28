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

const Social = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Follow Us</Text>
      <Text>
        a(href="https://m.facebook.com/RolandHealing" target="_blank"
        onclick="window.open('https://m.facebook.com/RolandHealing', '_blank',
        'location=yes'); return false;") i(class='fa fa-facebook-square') |
        RolandHealing a(href="https://mobile.twitter.com/RolandYakoubov"
        target="_blank"
        onclick="window.open('https://mobile.twitter.com/RolandYakoubov',
        '_blank', 'location=yes'); return false;") i(class='fa
        fa-twitter-square') | @RolandYakoubov
        a(href="http://rolandyakoubov.tumblr.com/mobile" target="_blank"
        onclick="window.open('http://rolandyakoubov.tumblr.com/mobile',
        '_blank', 'location=yes'); return false;") i(class='fa
        fa-tumblr-square') | RolandYakoubov
      </Text>
    </ScrollView>
  );
};

export default Social;
