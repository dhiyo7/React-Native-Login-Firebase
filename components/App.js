//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../assets/img/bg.png';
import { Dimensions } from "react-native";
import Loading from './Loading';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


// create a component
class App extends Component {

  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAh_nB0tVusx1FVEmK2pkLjFfzX7YKiz-E",
      authDomain: "reactnativelogin-9e325.firebaseapp.com",
      databaseURL: "https://reactnativelogin-9e325.firebaseio.com",
      projectId: "reactnativelogin-9e325",
      storageBucket: "reactnativelogin-9e325.appspot.com",
      messagingSenderId: "500092576456",
      appId: "1:500092576456:web:5727a641cbf97262647bfd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user =>{
      if (user) {
        this.setState({
          loggedIn:true
        })
      } else {
        this.setState({
          loggedIn:false
        })
      }
    })
  }

  renderContent = () =>{
    switch (this.state.loggedIn) {
      case false:
        return <ImageBackground style={styles.container} source={BG}>

          <LoginForm/>

        </ImageBackground> 
    
      case true:
        return <Articles/>

        default:
          return <Loading/>

        
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:height,
    width:width,
  },
});

//make this component available to the app
export default App;
