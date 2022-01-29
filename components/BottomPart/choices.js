import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AnswerSelector from './answerSelector';

export default function Choices(props) {
  const { responses } = props;
  const [isResponseSelected, setIsResponseSelected] = useState(false);

  const selectOnClick = () => { setIsResponseSelected(true) };

  useEffect(() => {
    setIsResponseSelected(false);
  }, responses);

  return (
    <View style={styles.choicesContainer}>
      <Text style={styles.choiceTitleText}>
        {isResponseSelected ? "ANSWER" : "SELECT A CHOICE"}
      </Text>
      {responses.map((response) => (
        <AnswerSelector key={response.id} answer={response} isResponse={isResponseSelected} onClick={selectOnClick} />
      ))}
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