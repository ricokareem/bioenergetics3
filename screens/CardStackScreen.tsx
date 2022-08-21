import React from "react";
import { FlatList, ListRenderItemInfo, Route } from "react-native";
import {
  WhiteContainer,
  ListText,
  ListSubheadingText,
  ListButton,
} from "../components";
import { Movies } from "../constants/MediaData";

type NavPropsType = {
  navigation: Route;
};

interface ItemType extends ListRenderItemInfo<any> {
  description: string;
  playlist: number[];
  subheading: string;
}

const cardStack = [...Movies].filter((c) => c.playlist?.length);

const CardStackScreen: React.FC<NavPropsType> = (props) => {
  const { navigation } = props;

  return (
    <WhiteContainer>
      <FlatList
        data={cardStack}
        renderItem={({ item }: ItemType) => (
          <ListButton
            testID="cardStackItem"
            key={item.id}
            onPress={() => {
              navigation.navigate(item.screen, {
                title: item.title,
                name: item.name,
                description: item.description,
                playlist: item.playlist,
              });
            }}
          >
            <ListText>{item.title}</ListText>
            <ListSubheadingText>{item.subheading}</ListSubheadingText>
          </ListButton>
        )}
        numColumns={2}
        keyExtractor={(item, index) => `${index}_${item.name}`}
      />
    </WhiteContainer>
  );
};

export default CardStackScreen;
