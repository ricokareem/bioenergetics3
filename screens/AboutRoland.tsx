import React from "react";
import { ScrollView, Text } from "react-native";
import { WhiteContainer } from "../components";


const AboutRoland: React.FC = () => {
  return (
    <WhiteContainer>
    <ScrollView>
      <Text>About Roland Yakoubov</Text>
      <Text>
        Roland Yakoubov is a graduate of the United Nation&apos;s Academy of
        Alternative Medical Science, and was awarded the Gold Star of Excellence
        in Diagnostics and Healing. In 1983, the Russian government granted two
        million dollars in grants and research funding to Roland and his aunt,
        Djuna Davitashvili, who developed these techniques. However, in the
        1990&apos;s Roland moved to the US to practice his techniques abroad.
        His techniques were instantly acknowledged by major celebrities and
        dignitaries, as they experienced the positive results of his healings.
        Some of his clients have included Jennifer Lopez, Dustin Hoffman&apos;s
        mother, Rosanna DeSoto, Matthew Vanleeuwen, the Khashoggi family, as
        well as Princess Diana who Roland was scheduled to meet one week prior
        to her passing.
      </Text>
    </ScrollView>
      </WhiteContainer>
  );
};

export default AboutRoland;
