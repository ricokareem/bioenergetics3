import React, { ReactElement } from "react";
import { Route, ScrollView, StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import { SymptomsPlaylists } from "../constants/MediaData";

type NavPropsType = {
  navigation: Route;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc9829",
  },
  listText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 14,
    color: "#fff",
  },
});

function ReferenceGuideScreen({ navigation }: NavPropsType): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView>
        {SymptomsPlaylists.map((item) => (
          <ListItem
            key={item.id}
            containerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              backgroundColor: "#fc9829",
            }}
            onPress={() =>
              navigation.navigate(item.screen, {
                title: item.title,
                playlist: item.movieIds,
              })
            }
            bottomDivider
          >
            <ListItem.Title style={styles.listText}>
              {item.title}
            </ListItem.Title>
            <ListItem.Chevron color="#fff" size={28} />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

export default ReferenceGuideScreen;
