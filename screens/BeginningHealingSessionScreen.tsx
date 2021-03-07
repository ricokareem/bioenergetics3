import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fc9829',
  },
  // listItem: {
  //   backgroundColor: '#fc9829',
  //   flex: 1,
  //   flexDirection: 'column',
  //   margin: 1,
  //   padding: '20px',
  //   height: 120,
  // },
  // listText: {
  //   fontSize: 12,
  //   fontWeight: 'bold',
  //   lineHeight: 14,
  //   color: '#fff',
  // },
  // listSubheadingText: {
  //   fontSize: 10,
  //   lineHeight: 12,
  //   color: '#fff',
  // },
});

const BeginningHealingSessionScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Introduction</Text>
      <Text>
        The energy healing techniques described in this method are touch free,
        non-toxic and health restoring. They were developed in the former Soviet
        Union in the 1980s, and have been extensively studied by world-renowned
        physicists, mathematicians and physicians. These techniques have proven
        to be extremely effective in treating a variety of physical ailments.
        They have shown significant results improving circulation, metabolism
        and to help strengthen the immune system and improve speed of recovery.
        However, they are not intended to replace conventional medical treatment
        of any kind. Both patient and healer are strongly encouraged to seek
        medical advice from a qualified, licensed healthcare provider before
        attempting any treatment modality.
      </Text>
      <Text>Preparing the Patient for Energy Healing</Text>
      <Text>
        In every medical profession it is important to determine the precise
        diagnosis. It would be logical before preparing your patient for a
        healing session to ask for their medical diagnoses and any pertinent
        healthcare documentation. After establishing the diagnosis the healer
        will be able to select the correct approach with the patient. Healers
        must be able to describe their work and allow the patient to understand
        the end result. After this the healer needs to describe how the session
        will be conducted. Introductions are made and the patient is offered to
        sit down in a comfortable chair. The patient is asked to rest both hands
        on the knees with the palms facing upward. The legs should be uncrossed
        and the feet should be flat on the floor. This is the receiving
        position. Throughout the session the patient&#39;s hands and feet should
        never cross, but remain still and comfortable in the receiving position.
        Now, gently ask the patient to relax and allow the healing to begin. The
        session requires two chairs, one for the patient and one for the healer.
        After both healer and patient are seated the work of healing begins.
      </Text>
    </ScrollView>
  );
};

export default BeginningHealingSessionScreen;
