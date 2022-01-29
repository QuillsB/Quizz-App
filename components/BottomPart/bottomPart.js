import React from 'react';
import { StyleSheet, View } from 'react-native';

import Choices from './choices';

export default function BottomPart() {
  return (
    <View style={styles.bottomPartContainer}>
      <Choices />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomPartContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 40,
    backgroundColor: "#E5E5E5"
  }
});
