import React ,{useState} from 'react';
import { StyleSheet, View ,TouchableWithoutFeedback,Keyboard} from 'react-native';

import Header from './components/Header';
import StartofGameScreen from './components/StartofGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen'

const App= props=> {
  const [userNumber,setUserNumber]=useState(false)
  const [userChosenNumber,setUserChosenNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);
  
  const configureNewGameHandler=()=>{
    setGuessRounds(0);
    setUserNumber(null)
  }
  
  const startGameHandler = selectedNumber =>{
    setUserChosenNumber(selectedNumber)  
    setGuessRounds(0);
    setUserNumber(true);    
  };

  const gameOverHandler = numberOfRounds=>{
    setGuessRounds(numberOfRounds);
  }
  let content = <StartofGameScreen onGameStart={startGameHandler}/>

  if(userNumber && guessRounds <=0){
    content=<GameScreen userChoice={userChosenNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds>0){
    content=<GameOverScreen guessNumber={guessRounds} onRestart={configureNewGameHandler}/>
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
export default App;