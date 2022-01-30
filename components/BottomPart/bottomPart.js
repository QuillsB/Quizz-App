import React from 'react';
import { StyleSheet, View } from 'react-native';

import Choices from './choices';

export default function BottomPart(props) {
  const { quizData } = props;

  return (
    <View style={styles.bottomPartContainer}>
      <Choices responses={quizData} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomPartContainer: {
    flex: 1,
    backgroundColor: "#000000"
  }
});
