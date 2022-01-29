import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function AnswerSelector(props) {
  const { answer } = props;

  return (
    <View style={styles.answerSelectorContainer}>
      <Text style={styles.answerOrderText}>{answer.order}</Text>
      <Text style={styles.answerLabelText}>{answer.label}</Text>
    </View>
  );
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
  answerOrderText: {
    flex: 1,
    fontWeight: 'bold',
    marginHorizontal: 20,
    maxWidth: 15
  },
  answerLabelText: {
    flex: 5,
    fontWeight: '300'
  }
})
