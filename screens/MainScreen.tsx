import React, { ReactElement } from "react";
import { View, ScrollView, StyleSheet, Route } from "react-native";
import { ListItem } from "react-native-elements";

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
  starLogo: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fb8400",
    paddingLeft: 20,
  },
});

const group1 = [
  { name: "Cards", title: "HEALING SEQUENCES" },
  { name: "ReferenceGuide", title: "SYMPTOMS AND CONDITIONS" },
];
const group2 = [
  { name: "HowToUseAppScreen", title: "HOW TO USE THIS APP" },
  {
    name: "BeginningHealingSessionScreen",
    title: "BEGINNING THE HEALING SESSION",
  },
  { name: "AboutHealingTechniques", title: "ABOUT THE HEALING TECHNIQUES" },
];

function MainMenuList({ navigation }: NavPropsType): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView>
        {group1.map((item) => (
          <ListItem
            key={item.name}
            containerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              backgroundColor: "#fb8400",
            }}
            onPress={() => navigation.navigate(item.name)}
            bottomDivider
          >
            <ListItem.Title style={styles.listText}>
              {item.title}
            </ListItem.Title>
            <ListItem.Chevron color="#fff" size={28} />
          </ListItem>
        ))}
        {group2.map((item) => (
          <ListItem
            key={item.name}
            containerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              backgroundColor: "#fc9829",
            }}
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
}

export default MainMenuList;
