//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Logo = () => {
    return (
        <View>
            <Image source={require('../assets/img/pic.png')} style={{width:105, height:25, justifyContent: 'flex-start'}}/>
        </View>
    );
};


//make this component available to the app

const styles = StyleSheet.create({
   
});
export default Logo;
