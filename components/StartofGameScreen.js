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
        
    }
})
export default StartofGameScreen