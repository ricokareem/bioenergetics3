import React from "react";
import { ScrollView, Text } from "react-native";
import { WhiteContainer } from "../components";

const Credits: React.FC = () => {
  return (
    <WhiteContainer>
      <ScrollView>
        <Text>Credits</Text>
        <Text>Lead Designer - Sal Camacho</Text>
        <Text>Lead Software Developer - Rico Rodriquez Collins</Text>
        <Text>Model - Stephanie Markel</Text>
        <Text>Camera & Production - Danny Deschamps</Text>
        <Text>Audio & Music - Ricky Godinez</Text>
      </ScrollView>
    </WhiteContainer>
  );
};

export default Credits;
