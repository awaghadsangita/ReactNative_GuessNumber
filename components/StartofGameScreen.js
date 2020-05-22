import React from 'react';
import {View,Text,TextInput,StyleSheet, Button} from 'react-native';


const StartofGameScreen = props =>{
    return (
        <View style={styles.container}>
            <Text Style={styles.titleText}>Start of Game</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput} placeholder="Select the Number"></TextInput>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Reset"/>
                    <Button style={styles.button} title="Confirm"/>
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
        fontSize:30,
        fontWeight:"bold",
        marginVertical:5,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    numberInput:{
        justifyContent:"center",
        width:100,
        maxWidth:'50%',
        marginVertical:5
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',

    },
    button:{
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:10,
        backgroundColor:'blue',
        
    }
})
export default StartofGameScreen