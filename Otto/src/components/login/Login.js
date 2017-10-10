import React, { Component } from 'react'
import { AsyncStorage, StatusBar, TouchableHighlight, TouchableOpacity, AlertIOS, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Form } from 'react-native'
import { func } from 'prop-types'
import t from 'tcomb-form-native'

import config from '../util/api/config'
import mainlogo from '../../static/images/mainlogo.png'
import { onSignIn } from "../auth/Auth";


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }
  
  saveItem = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  handleLogin = async () => {
    // onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
    const { email, password } = this.state

    let tokenSuccess = await this.userSignin({email, password})
    if (tokenSucess.error) {
      this.setState({email: '', password: '', error: true})
    }
  }
  
  userSignin = (user) => {
    fetch(config.LOGIN_ACCOUNT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
    })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.error) {
        this.setState({email: '', password: '', error: true})
        return;
      } else {
        console.log(responseData)
        
        // uncomment when ready to save to AsyncStorage
        this.saveItem(config.USER_TOKEN, responseData.token)

        // send token payload to route state params
        this.props.navigation.navigate('SignedIn', responseData)
      }
    })
    .done();
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateAccount')
  }

  handleUserChange = (user) => {
    this.setState({
      email: user
    })
  }

  handlePasswordChange = (password) => {
    this.setState({
      password: password
    })
  }


  render() {
    const { handleUserSubmit } = this.props
    const { email, password, error } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={mainlogo}
          />
          <Text
            style={styles.title}>
            Otto
          </Text>
        </View>

        <View style={styles.formContainer}>
        <View style={styles.formStyle}>
        <StatusBar
          barStyle='light-content'
        />
        <TextInput
          placeholder='Email'
          style={styles.inputField}
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={this.handleUserChange}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder='Password'
          style={styles.inputField}
          returnKeyType='go'
          ref={input => this.passwordInput = input}
          onChangeText={this.handlePasswordChange}
          value={password}
        />
        { error ? <Text style={{color: 'red'}}> {error} </Text> : null }
          <TouchableOpacity onPress={this.handleLogin} style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleCreatePress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        </View>

      </KeyboardAvoidingView>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#222A43'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#eee',
    fontSize: 35,
    marginTop: 10
  },
  formStyle: {
    padding: 20
  },
  inputField: {
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#E2F7FA',
    marginBottom: 20,
    color: '#222A43'
  },
  buttonContainer: {
    backgroundColor: '#1EBF9E',
    paddingVertical: 15,
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#E2F7FA',
    fontWeight: '700'
  }
}
