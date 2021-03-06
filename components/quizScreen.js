import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import QuestionTitle from './questionTitle';
import BottomPart from './BottomPart/bottomPart';

import { getQuiz } from '../api/quizApi';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function QuizScreen() {
  const [actualQuestion, setActualQuestion] = useState(null);

  useEffect(() => {
    if (!actualQuestion) {
      setActualQuestion(getQuiz(1));
    }
  }, [actualQuestion]);

  const onSwipeUp = () => {
    setActualQuestion(getQuiz(actualQuestion.nextQuestionId));
  };

  return (
    <GestureRecognizer onSwipeUp={onSwipeUp} style={styles.quizScreenContainer}>
        <View style={styles.quizScreenTopPart}>
          {actualQuestion && (
            <QuestionTitle title={actualQuestion.question}/>
          )}
        </View>
        <View style={styles.quizScreenBottomPart}>
          {actualQuestion && (
            <BottomPart quizData={actualQuestion.response}/>
          )}
        </View>
    </GestureRecognizer>
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
