import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AnswerSelector from './answerSelector';

export default function Choices() {
  return (
    <View style={styles.choicesContainer}>
      <Text style={styles.choiceTitleText}>SELECT A CHOICE</Text>
      <AnswerSelector answer={{label: "Answer 1", order: "A"}}/>
      <AnswerSelector answer={{label: "Answer 2", order: "B"}}/>
      <AnswerSelector answer={{label: "Answer 3", order: "C"}}/>
      <AnswerSelector answer={{label: "Answer 4", order: "D"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  choicesContainer: {
    flex: 1,
  },
  choiceTitleText: {
    color: '#606367',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10
  }
});