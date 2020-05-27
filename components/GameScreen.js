import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import MainButton from './MainButton';
import Colors from '../constants/color';
import NumberContainer from './NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const  renderListItem = (value,round) =>{
  return (<View key={value} style={styles.listItem}>
    <Text>#{round}</Text>
    <Text>{value}</Text>
  </View>)
}
const GameScreen = props => {
  const initialGuess= generateRandomBetween(1,100,props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(currentGuess);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(curPastGuess => [nextNumber,...curPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <MainButton  
          style={styles.button}
          onPress={nextGuessHandler.bind(this, 'lower')} >
          <Ionicons name="md-remove" size={32} />
        </MainButton>
        <MainButton 
          style={styles.button}
          onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={32} />
        </MainButton>
      </View>
      <View style={styles.list}>
      <ScrollView >
        {pastGuesses.map((guess,index)=>renderListItem(guess,pastGuesses.length-index)
        )}
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  button:{
    width:90,
    marginHorizontal:5,
    backgroundColor:Colors.secondary
  },
  list:{
    width:'80%',
    justifyContent:'space-between',
    alignItems:'center',
    margin:20
  },
  listItem:{
    flexDirection:'row',
    borderColor:'black',
    borderWidth:1,
    marginVertical:10,
    padding:15,
    justifyContent:'space-around',
    alignItems:'center',
    width:'75%'
  }
});

export default GameScreen;



