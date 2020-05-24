import React from 'react';
import { StyleSheet, Text, View ,TouchableWithoutFeedback,Keyboard} from 'react-native';

import Header from './components/Header';
import StartofGameScreen from './components/StartofGameScreen';
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StartofGameScreen />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
