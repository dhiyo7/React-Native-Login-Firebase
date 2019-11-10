//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// create a component
class EmailandPassword extends Component {

    state={
        email:'',
        password:'',
        error:'Login Failed'
    }

    render(){

        return (
            <View style={styles.container}>
               
                <TextInput 
                placeholder="Email" 
                style={styles.input} 
                value={this.state.email}
                onChangeText={email=> this.setState({email})}></TextInput>
 
                <TextInput 
                placeholder="Password" 
                style={styles.input} v
                alue={this.state.password}
                onChangeText={password=> this.setState({password})}></TextInput>
    
                <TouchableOpacity>
                    <Text style={styles.errorInput}>
                        {this.state.error}
                    </Text>
                </TouchableOpacity>

            </View>  
        );
    }   
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input:{
        height:40,
        backgroundColor: 'rgba(255,255,255,5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
        backgroundColor:'#ededed'
    },
    errorInput:{
        fontSize:15,
        color:'red',
        alignSelf:'center'
    }
});

//make this component available to the app
export default EmailandPassword;
