//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';

// create a component
class App extends Component {

  state={
    loggedIn:false
  }

  renderContent = () =>{
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm/>
    
      case true:
        return <Articles/>
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
  },
});

//make this component available to the app
export default App;
