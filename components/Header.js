import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/color';
const Header = props => {
    return (
            <View style={styles.headerContainer}>
                <Text Style={styles.headerText}>{props.title}</Text>
            </View>);
    
}

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary
    },
    headerText:{
        fontSize:30,
        color:'white',
        fontWeight:"bold"
    }
})
export default Header;