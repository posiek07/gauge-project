import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import RNSpeedometer from 'react-native-speedometer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Dashboard = ({ navigation }) => {
  const [value, setValue] = useState(66);
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          icon="road"
          mode="contained"
          onPress={() => navigation.navigate('MyTrips')}
        >
          Trips
        </Button>
        <Button
          style={styles.button}
          icon="car-settings"
          mode="contained"
          onPress={() => navigation.navigate('MyDriverScore')}
        >
          Driver Score
        </Button>
      </View>
      <View style={{ marginTop: 30 }}>
        <RNSpeedometer value={value} size={250} maxValue={100} />
      </View>
      <View style={styles.modernGauge}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          backgroundWidth={5}
          fill={value}
          tintColor="#00ff00"
          tintColorSecondary="#ff0000"
          backgroundColor="#3d5875"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        >
          {(fill) => <Text style={styles.points}>{fill.toFixed(0)}</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={{ margin: 10 }}>
        <Button
          icon="plus-minus"
          mode="contained"
          onPress={() => setValue(parseInt((Math.random() * 100).toFixed(0)))}
        >
          Generate random number
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  button: {
    display: 'flex',
    width: '48%',
  },
  modernGauge: {
    marginTop: 100,
    alignItems: 'center',
  },
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: '100',
  },
});

export default Dashboard;
