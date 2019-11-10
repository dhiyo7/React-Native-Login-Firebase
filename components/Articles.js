//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Articles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
            <Text style={styles.heading}>Welcome to PLUGIN apps</Text>

            <Text style={styles.content}>Your Loggedin with Firebase</Text>

            <TouchableOpacity style={styles.btnLogout} onPress={() => firebase.auth().signOut()}>
            <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    articleContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:5
    },
    heading:{
        fontSize:22,
        color:'black',
        padding:10,
        justifyContent: 'center',

    },
    content:{
        marginTop:10,
        fontSize:17
    },
    logout:{
        color:'#027ab0'
    },
    btnLogout:{
        padding: 20
    }
});

//make this component available to the app
export default Articles;
