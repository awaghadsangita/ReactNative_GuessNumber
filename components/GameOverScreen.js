import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import Colors from '../constants/color'
const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.gameOverText} color={Colors.secondary}>Guess Number is {props.guessNumber}</Text>
            <Text style={styles.gameOverText}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images.jpeg')}
                    style={styles.image}/>
            </View>
            <Button title="Start a New Game" 
                    color={Colors.secondary}
                    onPress={props.onRestart}/>
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
    },
    imageContainer:{
        width:300,
        height:300,
        borderBottomColor:'black',
        borderBottomWidth:5,
        borderRadius:150,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    }
});

export default GameOverScreen;
