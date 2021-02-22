import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native';

const AboutHealingTechniques = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text>About These Unique Healing Techniques</Text>
      <Text>
        These techniques were developed by Djuna Davitashvili, a world
         famous Russian healer and aunt to Roland Yakoubov. They have been
         published in medical journals as an unexplained healing phenomenon
         of bioenergy fields. These techniques are acknowledged world wide,
         and have been registered with the United Nations: Academy of
         Alternative Medical Science.

         All of the movements must be performed in precise order.
         Approach the movements, as if the hands were gliding through
         water and a gentle resistance exists. The resistance will slowly
         increase as you make contact with the patient&#39;s energy. The patient&#39;s
         body is seldom actually touched. Instead, the work takes place
         around the patient in the living energy field. These movements
         help to reprogram the metabolism and return a healthy calmness to the body.

         The healer begins the session by positioning a hand on either
         side of the patient at the hip area. The fingertips are positioned
         slightly apart, with the fingers and palms gently curved versed,
         and the entire sequence repeated without stopping for 5 or 6 minutes.
      </Text>
      <Text>Preparing the Patient for Energy Healing</Text>
      <Text>
        In every medical profession it is important to determine the
        precise diagnosis. It would be logical before preparing your
        patient for a healing session to ask for their medical diagnoses
        and any pertinent healthcare documentation. After establishing
        the diagnosis the healer will be able to select the correct
        approach with the patient. Healers must be able to describe their
        work and allow the patient to understand the end result. After
        this the healer needs to describe how the session will be conducted.
        Introductions are made and the patient is offered to sit down in a
        comfortable chair. The patient is asked to rest both hands on the
        knees with the palms facing upward. The legs should be uncrossed
        and the feet should be flat on the floor. This is the receiving
        position. Throughout the session the patient&#39;s hands and feet
        should never cross, but remain still and comfortable in the
        receiving position. Now, gently ask the patient to relax and
        allow the healing to begin. The session requires two chairs,
        one for the patient and one for the healer. After both healer
        and patient are seated the work of healing begins.
      </Text>
    </ScrollView>
  );
};

AboutHealingTechniques.propTypes = {};

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

export default AboutHealingTechniques;
