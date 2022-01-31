import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import QuizScreen from 'containers/quizScreenContainer';

import store from 'store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <QuizScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
