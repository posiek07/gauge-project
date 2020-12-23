import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View>
      <Text style={styles.title}>About</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        earum sapiente tenetur at dolorum? Aliquam illum temporibus quibusdam
        quasi, explicabo placeat qui quidem nobis natus? Magnam perferendis esse
        nihil nam.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'left',
    margin: 20,
    fontSize: 20,
  },
});

export default About;
