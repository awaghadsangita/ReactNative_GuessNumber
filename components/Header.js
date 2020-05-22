import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

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
        backgroundColor:'#f542c2'
    },
    headerText:{
        fontSize:20,
        color:'white'
    }
})
export default Header;