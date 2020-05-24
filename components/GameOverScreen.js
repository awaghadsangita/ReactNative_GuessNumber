import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/color'
const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.gameOverText} color={Colors.secondary}>Guess Number is {props.guessNumber}</Text>
            <Text style={styles.gameOverText}>The Game is Over!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gameOverText:{
        fontSize:26
    }
});

export default GameOverScreen;
