import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
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

interface ItemType extends ListRenderItemInfo<any> {
  description: string;
  playlist: number[];
  subheading: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  listItem: {
    backgroundColor: "#fc9829",
    flex: 1,
    flexDirection: "column",
    height: 120,
    justifyContent: "center",
    margin: 1,
    padding: 20,
  },
  listText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 14,
  },
  listSubheadingText: {
    color: "#fff",
    fontSize: 10,
    lineHeight: 12,
    marginTop: 5,
  },
});

const cardStack = [...Movies].filter((c) => c.playlist && c.playlist.length);

const CardStackScreen: React.FC<NavPropsType> = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={cardStack}
        renderItem={({ item }: ItemType) => (
          <TouchableOpacity
            style={styles.listItem}
            testID="cardStackItem"
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
        keyExtractor={(item, index) => `${index}_${item.name}`}
      />
    </View>
  );
};

export default CardStackScreen;
