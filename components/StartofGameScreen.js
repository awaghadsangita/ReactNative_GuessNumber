import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

import Input from './Input';
import Colors from '../constants/color';
const StartofGameScreen = props =>{
    const [enteredValue,setEnteredValue]=useState('');
    const inputNumberHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    return (
        <View style={styles.container}>
            <Text Style={styles.titleText}>Start of Game</Text>           
            <View style={styles.inputContainer}>   
                <Input style={styles.input} 
                        placeholder="Enter the Number"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={inputNumberHandler}
                        value={enteredValue}
                        />
                <View style={styles.buttonContainer} >
                    <Button style={styles.button} title="Reset" color={Colors.secondary}/>
                    <Button style={styles.button} title="Confirm" color={Colors.primary}/>
                </View>            
            </View>
        </View>       
    );
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    titleText:{
        color:'pink',
        fontSize:25,
        fontWeight:"bold",
        marginVertical:20
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:5,
        padding:10
    },
    numberInput:{
        justifyContent:"center",
        width:150,
        marginVertical:5
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:10,
        backgroundColor:'blue',       
    },
    input:{
        width:150
    }
})
export default StartofGameScreen