import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native';

import Input from './Input';
import Colors from '../constants/color';
const StartofGameScreen = props =>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedValue,setSelectedValue]=useState();

    const inputNumberHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputNumber=()=>{
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmInputNumber=()=>{
        let choosenNumber=parseInt(enteredValue);
        if(choosenNumber===NaN||choosenNumber<0||choosenNumber>99){
            Alert.alert("Invalid Number !","Number has to be between 0 To 99 ",[{text:"Okay",style:'destructive',onPress:resetInputNumber}])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedValue(choosenNumber);    
    }

    const onStartGame=selectedNumber=>{
        props.onGameStart(selectedNumber)
    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput=<View style={styles.summaryContainer}>
                            <Text>Choosen Number : {selectedValue}</Text>
                            <Button title="Start a Game" 
                                    color={Colors.secondary}
                                    onPress={()=>onStartGame(selectedValue)}/>
                        </View> 
    }
    return (    
        <View style={styles.container}>
            <Text style={styles.titleText}>Start of Game</Text>           
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
                    <Button style={styles.button} 
                            title="Reset" 
                            color={Colors.secondary}
                            onPress={resetInputNumber}
                            />
                    <Button style={styles.button} 
                            title="Confirm" 
                            color={Colors.primary}
                            onPress={confirmInputNumber}/>
                </View>            
            </View>
            {confirmedOutput}
        </View>       
        
    );
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    titleText:{
        color:Colors.secondary,
        fontSize:25,
        fontWeight:"bold",
        marginVertical:20
    },
    inputContainer:{
        width:250,
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
        alignItems:'center',
        paddingHorizontal:40
        
    },
    button:{
        width:30       
    },
    input:{
        width:150
    },
    summaryContainer:{
        width:180,
        maxWidth:'50%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:5,
        padding:10,
        marginTop:20
    }
})
export default StartofGameScreen