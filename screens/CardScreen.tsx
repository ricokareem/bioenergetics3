import React from "react";
import {
  FlatList,
  Route,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Movies } from "../constants/MediaData";

type NavPropsType = {
  navigation: Route;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    backgroundColor: "#fc9829",
    flex: 1,
    flexDirection: "column",
    margin: 1,
    padding: 20,
    height: 120,
  },
  listText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 14,
    color: "#fff",
  },
  listSubheadingText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#fff",
  },
});

const symptoms = [...Movies, { name: null, screen: null, title: "" }];

const CardScreen = (props: NavPropsType) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={symptoms}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate(item.screen, {
                title: item.title,
                name: item.name,
                description: item.description,
                playlist: item.playlist,
              });
            }}
          >
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listSubheadingText}>{item.subheading}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default CardScreen;
