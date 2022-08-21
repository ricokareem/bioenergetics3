import React from "react";
import { ScrollView, Text } from "react-native";
import { WhiteContainer } from "../components";

const Disclaimer: React.FC = () => {
  return (
    <WhiteContainer>
      <ScrollView>
        <Text>Disclaimer</Text>
        <Text>
          The information presented herein is in no way intended as medical advice
          or to serve as a substitute for medical counseling. The information
          should be used in conjunction with the guidance and care of your
          physician. The information may not apply to you and before you use any
          of the information provided in the app, you should contact a qualified
          medical, dietary, fitness, or other appropriate professional. If you
          utilize any information provided in this app, you do so at your own risk
          and you specifically waive any right to make any claim against
          rolandhealinghands.com or Roland Yakoubov Bioenergetic Healing, its
          employees or representatives, as the result of the use of such
          information.
        </Text>
      </ScrollView>
    </WhiteContainer>
  );
};

export default Disclaimer;
