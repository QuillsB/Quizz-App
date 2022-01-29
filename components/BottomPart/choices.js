import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AnswerSelector from './answerSelector';

export default function Choices() {
  const [isResponseSelected, setIsResponseSelected] = useState(false);

  const selectOnClick = () => { setIsResponseSelected(true) };

  return (
    <View style={styles.choicesContainer}>
      <Text style={styles.choiceTitleText}>SELECT A CHOICE</Text>
      <AnswerSelector answer={{label: "Answer 1", order: "A", percentage: "55", isCorrect: true}} isResponse={isResponseSelected} onClick={selectOnClick} />
      <AnswerSelector answer={{label: "Answer 2", order: "B", percentage: "17", isCorrect: false}} isResponse={isResponseSelected} onClick={selectOnClick}/>
      <AnswerSelector answer={{label: "Answer 3", order: "C", percentage: "24", isCorrect: false}} isResponse={isResponseSelected} onClick={selectOnClick}/>
      <AnswerSelector answer={{label: "Answer 4", order: "D", percentage: "4", isCorrect: false}} isResponse={isResponseSelected} onClick={selectOnClick}/>
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