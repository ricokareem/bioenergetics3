import React from "react";
import { ScrollView, Text, StyleSheet, Route, Dimensions } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { Asset } from "expo-asset";
import { Video } from "expo-av";

type CardMediaProps = {
  route: Route;
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc9829",
  },
  backgroundVideo: {
    height: windowWidth / 2,
    marginBottom: 24,
  },
});

const CardMedia: React.FC<CardMediaProps> = (props) => {
  const { route } = props;
  const { title, name, description } = route.params;

  let videoFile;
  switch (name) {
    case "card1":
      videoFile = require("../media/1.mp4");
      break;
    case "card2":
      videoFile = require("../media/2.mp4");
      break;
    case "card3":
      videoFile = require("../media/3.mp4");
      break;
    case "card4":
      videoFile = require("../media/4.mp4");
      break;
    case "card5":
      videoFile = require("../media/5.mp4");
      break;
    case "card6":
      videoFile = require("../media/6.mp4");
      break;
    case "card7":
      videoFile = require("../media/7.mp4");
      break;
    case "card81":
      videoFile = require("../media/81.mp4");
      break;
    case "card82":
      videoFile = require("../media/82.mp4");
      break;
    case "card9":
      videoFile = require("../media/9.mp4");
      break;
    case "card10":
      videoFile = require("../media/10.mp4");
      break;
    case "card11":
      videoFile = require("../media/11.mp4");
      break;
    case "card121":
      videoFile = require("../media/121.mp4");
      break;
    case "card122":
      videoFile = require("../media/122.mp4");
      break;
    case "card123":
      videoFile = require("../media/123.mp4");
      break;
    case "card131":
      videoFile = require("../media/131.mp4");
      break;
    case "card132":
      videoFile = require("../media/132.mp4");
      break;
    case "card133":
      videoFile = require("../media/133.mp4");
      break;
    default:
      break;
  }

  const chosenVideoURI = Asset.fromModule(videoFile).uri;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Video
          source={{ uri: chosenVideoURI }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.backgroundVideo}
        />
        <Text style={{ marginBottom: 10 }}>{description}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="NOW"
        />
      </Card>
    </ScrollView>
  );
};

export default CardMedia;
