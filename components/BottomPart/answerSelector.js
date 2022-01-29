import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function AnswerSelector(props) {
  const { label } = props;

  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
}
