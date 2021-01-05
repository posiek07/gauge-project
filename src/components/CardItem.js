import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Card } from "react-native-paper"

const CardItem = ({ title, score, subtitle, callback }) => {
  return (
    <Card style={styles.cardWrapper}>
      <Card.Title title={title} subtitle={subtitle} />

      <View style={styles.scoreWrapper}>
        <Text style={styles.score}>{score}</Text>
        <Text styles={styles.scoreMax}>/100</Text>
      </View>
      <Card.Actions>
        <Button onPress={() => callback()}>Improve your score</Button>
      </Card.Actions>
    </Card>
  )
}

export default CardItem

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 20,
  },
  scoreWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  score: {
    fontSize: 60,
    textAlign: "center",
  },
  scoreMax: {
    color: "red",
  },
})
