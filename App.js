import React ,{useState} from 'react';
import { StyleSheet, View ,TouchableWithoutFeedback,Keyboard} from 'react-native';

import Header from './components/Header';
import StartofGameScreen from './components/StartofGameScreen';
import GameScreen from './components/GameScreen';

const App= props=> {
  const [userNumber,setUserNumber]=useState(false)
  const [userChosenNumber,setUserChosenNumber]=useState();
  const startGameHandler= selectedNumber =>{
    setUserChosenNumber(selectedNumber)  
    setUserNumber(true);

  };

  let content = <StartofGameScreen onGameStart={startGameHandler}/>

  if(userNumber){
    content=<GameScreen userChoice={userChosenNumber}/>
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