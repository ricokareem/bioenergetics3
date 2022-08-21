import React from "react";
import { ScrollView, Text } from "react-native";
import { WhiteContainer } from "../components";

const HowToUseAppScreen: React.FC = () => {
  return (
    <WhiteContainer>
      <ScrollView>
        <Text style={{ marginBottom: 10 }}>How to use this app</Text>
        <Text>
          Before performing any of the full healing programs, we advise you to
          familiarize yourself with the 13 Healing Sequences. Read the
          description for each of the movements thoroughly and then watch the
          video for practice. Once familiar with the movements, search the list
          of symptoms and conditions for the ones that describe what you suffer
          from. Follow along with the video and perform as indicated.
        </Text>
      </ScrollView>
    </WhiteContainer>
  );
};

export default HowToUseAppScreen;
