import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import check from '../../assets/Check.png'

export default function AnswerSelector(props) {
  const { answer, isResponse, onClick, key } = props;

  const displayChoices = () => {
    return (
      <View key={key} style={styles.answerSelectorContainer} onStartShouldSetResponder={onClick}>
        <Text style={styles.answerOrderText}>{answer.order}</Text>
        <Text style={styles.answerLabelText}>{answer.label}</Text>
      </View>
    );
  };

  const displayResponse = () => {
    return (
      <View style={answer.isCorrect ? styles.answerResponseCorrect : styles.answerResponseUnCorrect}>
        {answer.isCorrect && <Image source={check} style={styles.checkIcon}/> }
        <Text style={styles.answerOrderText}>{answer.percentage}%</Text>
        <Text style={styles.answerLabelText}>{answer.label}</Text>
      </View>
    );
  };

  return isResponse ? displayResponse() : displayChoices();
}

const styles = StyleSheet.create({
  answerSelectorContainer: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 400,
    maxHeight: 50,
    borderRadius: 7,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    alignItems: 'center',
    shadowOffset: { width: 20, height: 10 }
  },
  answerResponseCorrect : {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 400,
    maxHeight: 50,
    borderRadius: 7,
    backgroundColor: "#E263BF",
    marginBottom: 10,
    alignItems: 'center',
    shadowOffset: { width: 20, height: 10 }
  },
  answerResponseUnCorrect : {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 400,
    maxHeight: 50,
    borderRadius: 7,
    backgroundColor: "#BCD0E2",
    marginBottom: 10,
    alignItems: 'center',
    shadowOffset: { width: 20, height: 10 }
  },
  answerOrderText: {
    flex: 1,
    fontWeight: 'bold',
    marginHorizontal: 15,
    maxWidth: 25
  },
  answerLabelText: {
    flex: 5,
    fontWeight: '300'
  },
  checkIcon: {
    width: 17,
    height: 17,
    position: 'absolute',
    left: -8
  }
})
