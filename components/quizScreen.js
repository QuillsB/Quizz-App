import React from 'react';
import { StyleSheet, View } from 'react-native';

import QuestionTitle from './questionTitle';
import BottomPart from './BottomPart/bottomPart';

export default function QuizScreen() {
  return (
    <View style={styles.quizScreenContainer}>
      <View style={styles.quizScreenTopPart}>
        <QuestionTitle />
      </View>
      <View style={styles.quizScreenBottomPart}>
        <BottomPart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quizScreenContainer: {
    flex: 1,
  },
  quizScreenTopPart: {
    flex: 1,
    backgroundColor: '#000000'
  },
  quizScreenBottomPart: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  }
})
