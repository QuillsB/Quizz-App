import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuestionTitle() {
  return (
    <View style={styles.questionTitleContainer}>
      <View style={styles.quizMarkerContainer}>
        <Text style={styles.quizMarkerText}>QUIZ</Text>
      </View>
      <View style={styles.questionTitleTextContainer}>
        <Text style={styles.questionTitleText}>
          This is the first question ?
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 150,
    paddingLeft: 40
  },
  quizMarkerContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    maxWidth: 40,
    maxHeight: 25,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizMarkerText: {
    color: '#000000',
    fontWeight: 'bold'
  },
  questionTitleTextContainer: {
    flex: 3,
    marginTop: 10
  },
  questionTitleText: {
    color: '#ffffff',
    fontSize: 25
  }
})
