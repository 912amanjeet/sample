import React, {Component} from 'react';
console.disableYellowBox = true;
import {StyleSheet, Image, View, Text, StatusBar, Alert} from 'react-native';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';


import Login from './screen/login';


import { createSwitchNavigator, createAppContainer, StackActions,} from 'react-navigation';

const AuthStack = createStackNavigator(
  {
   
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
   
    

    
    

    
  
    

  
  },

  {
    initialRouteName: 'Login',
    headerMode: 'none',
  
  },
);

//Splash Screen
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.text} >Splash Screen</Text>
       
      </View>
    );
  }
  _loadData = async () => {
    try {
      setTimeout(() => {
        this.props.navigation.navigate('Auth');
      }, 3000);
    } catch (error) {
      console.log('Error in Splash Screen' + error);
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#37517e',
  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    color:"white"
  }
});


const SwithNavigate = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      // App: inithome,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
export const popToTop = StackActions.popToTop();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <SwithNavigate />;
  }
}
