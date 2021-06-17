import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import external from '../style';
import {Button} from 'galio-framework';
import CheckBox from 'react-native-check-box';


class Login extends Component {
  constructor(props) {
    console.log('hi',props)
    super(props);

    this.state = {
      isChecked: false,
      email_: '',
      passWord: '',
    };
  }

  

  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={external.maincontainer2}>
           
              <View style={external.LoginWelcomeView}>
                <Text style={external.LoginWelcomeText}>Login</Text>
                
             
            </View>
            <View style={external.LogintextinputButtonMainView}>
              <TextInput
                style={external.LoginTextInput}
                placeholder="Email"
                defaultValue={this.state.email_}
                onChangeText={(value) =>
                  this.setState({email_: value})
                }></TextInput>
              <TextInput
                style={external.LoginTextInput}
                placeholder="Password"
                defaultValue={this.state.passWord}
                onChangeText={(value) =>
                  this.setState({passWord: value})
                }></TextInput>
              <View
                style={{
                  width: '100%',
                  height: '8%',
                  marginTop: '3%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <CheckBox
                    onClick={() => {
                      this.setState({
                        isChecked: !this.state.isChecked,
                      });
                    }}
                    isChecked={this.state.isChecked}
                  />
                  <Text> Remember me</Text>
                </View>

               
              </View>
              <TouchableOpacity
               
              
                style={{
                  width: '40%',
                  height: '20%',
                  alignItems: 'center',
                  marginTop: '10%',
                  backgroundColor: '#37517e',
                  borderRadius: 10,
                }}
                size="large">
                <Text style={{color: 'white', padding: 12, fontSize: 18}}>
                  {' '}
                  Sign In{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
export default Login;
