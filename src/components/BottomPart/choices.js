import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AnswerSelector from 'components/BottomPart/answerSelector';

import arrowUp from 'assets/arrow-up.png';

export default function Choices(props) {
  const { responses } = props;
  const [isResponseSelected, setIsResponseSelected] = useState(false);

  const selectOnClick = () => { setIsResponseSelected(true) };

  useEffect(() => {
    setIsResponseSelected(false);
  }, responses);

  return (
    <>
      <View style={styles.choicesContainer}>
        <Text style={styles.choiceTitleText}>
          {isResponseSelected ? "ANSWER" : "SELECT A CHOICE"}
        </Text>
        {responses.map((response) => (
          <AnswerSelector key={response.order} answer={response} isResponse={isResponseSelected} onClick={selectOnClick} />
        ))}
      </View>
      {isResponseSelected && (
        <View style={styles.swipeUpContainer}>
          <View style={styles.swipeUpImageContainer}>
            <Image source={arrowUp} style={styles.swipeUpImage} />
          </View>
          <Text style={styles.swipeUpText}>SWIPE UP TO CONTINUE</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  choicesContainer: {
    flex: 6,
    backgroundColor: "#E5E5E5",
    paddingTop: 30,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  choiceTitleText: {
    color: '#606367',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10
  },
  swipeUpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  swipeUpText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13
  },
  swipeUpImageContainer: {
    width: 35,
    height: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D656B',
    position: 'absolute',
    top: -6
  },
  swipeUpImage: {
    width: 20,
    height: 10
  }
});