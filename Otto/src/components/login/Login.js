import React, { Component } from 'react'
import { AsyncStorage, StatusBar, TouchableHighlight,TouchableOpacity, AlertIOS, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import { func } from 'prop-types'
import t from 'tcomb-form-native'

import mainlogo from '../../static/images/mainlogo.png'
import { onSignIn } from "../auth/Auth";


export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleLogin = () => {
    let userName = this.state.userName
    let password = this.state.password

    onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
  }

  handleCreate = () => {
    this.props.navigation.navigate('CreateAccount')
  }

  handleUserChange = (user) => {
    this.setState({
      userName: user
    })
  }

  handlePasswordChange = (password) => {
    this.setState({
      password: password
    })
  }

  render() {
    const { handleUserSubmit } = this.props
    const { userName, password } = this.state

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
            value={userName}
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

          <TouchableOpacity onPress={this.handleLogin} style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleCreate} style={styles.buttonContainer}>
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
