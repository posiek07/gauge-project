import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const TileItem = ({ start, end, type, deleteItem, id }) => {
  return (
    <Card style={styles.cardWrapper}>
      <View style={styles.iconWrapper}>
        <Icon
          title="icon"
          name={type !== 'personal' ? 'briefcase' : 'person'}
          color="black"
          size={35}
        />
      </View>
      <View style={styles.scoreWrapper}>
        <View>
          <Text>Start:</Text>
          <Text style={styles.times}>{start}</Text>
        </View>
        <View>
          <Text>End:</Text>
          <Text style={styles.times}>{end}</Text>
        </View>
      </View>
      <Card.Actions style={styles.buttonWrapper}>
        <Button
          icon={() => (
            <Icon title="arrow" name="arrow-redo" color="blue" size={25} />
          )}
          onPress={() => deleteItem(id)}
        />
      </Card.Actions>
    </Card>
  );
};

export default TileItem;

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 10,
    width: 150,
    height: 150,
  },
  buttonWrapper: {
    justifyContent: 'center',
  },
  iconWrapper: { alignItems: 'center', justifyContent: 'center' },
  scoreWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  times: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
