import React from 'react';
import { View, Stylesheet, Text } from 'react-native';

import AnswerSelector from './answerSelector';

export default function Choices() {
  return (
    <View>
      <Text>SELECT A CHOICE</Text>
      <AnswerSelector label="Answer 1"/>
      <AnswerSelector label="Answer 2"/>
      <AnswerSelector label="Answer 3"/>
      <AnswerSelector label="Answer 4"/>
    </View>
  );
}