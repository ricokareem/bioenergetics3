import React from "react";
import { Route, ScrollView, StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";

type NavPropsType = {
  navigation: Route;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc9829",
  },
  listItem: {
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fc9829",
  },
  listText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 14,
    color: "#fff",
  },
});

const symptoms = [
  { name: "AboutRoland", title: "ABOUT ROLAND YAKOUBOV" },
  { name: "Disclaimer", title: "DISCLAIMER" },
  { name: "Social", title: "FOLLOW US" },
  { name: "Credits", title: "CREDITS" },
];

const InfoScreen = (props: NavPropsType) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        {symptoms.map((item, index) => (
          <ListItem
            key={index}
            containerStyle={styles.listItem}
            onPress={() => navigation.navigate(item.name)}
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
};

export default InfoScreen;
