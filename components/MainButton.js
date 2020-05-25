import React from 'react';
import {View,Button,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/color'
const MainButton = props =>{
    return (
    <TouchableOpacity onPress={props.onPress} style={{...styles.mainContainer ,...props.style}}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
    ) 
}
const styles = StyleSheet.create({
    mainContainer:{
        borderRadius:20
    },
    button:{
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:20
    },
    buttonText:{
        color:'white',
        fontSize:18   
    }
});

export default MainButton;