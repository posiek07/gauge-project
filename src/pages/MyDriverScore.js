import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardItem from '../components/CardItem';

const initialState = [
  {
    title: 'My Driver Score',
    score: 83,
    subtitle: 'Overall driver score',
  },
  {
    title: 'Acceleration Score',
    score: 95,
    subtitle: 'Overall acceleration score',
  },
  {
    title: 'Breaking Score',
    score: 77,
    subtitle: 'Overall breaking score',
  },
  {
    title: 'Cornering Score',
    score: 69,
    subtitle: 'Overall cornering score',
  },
  {
    title: 'Eco Driving Score',
    score: 66,
    subtitle: 'Overall driver score',
  },
];

const MyDriverScore = () => {
  const [scores, setScores] = useState(initialState);
  return (
    <ScrollView>
      <View style={styles.cardItemWrapper}>
        {scores.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            score={item.score}
            subtitle={item.subtitle}
            callback={() => {
              const random = (Math.random() * 100).toFixed(0);
              setScores((prevState) => {
                let newArray = [...prevState];
                newArray[index].score = random;
                return newArray;
              });
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyDriverScore;

const styles = StyleSheet.create({
  cardItemWrapper: {
    padding: 10,
  },
});
