import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = props=>{
    return (
        <TextInput {...props} style={{...style.input,...style.props}}></TextInput>
    );
}
const style=StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginVertical:10
    }
});
export default Input;