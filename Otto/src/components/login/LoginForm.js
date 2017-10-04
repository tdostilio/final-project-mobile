import React, { Component } from 'react'
import { func } from 'prop-types'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'


export default class LoginForm extends Component {

  state = {
    userName: '',
    password: ''
  }

  static propTypes = {
    handleUserSubmit: func.isRequired
  }

  handleSubmit = () => {
    let userName = this.state.userName
    let password = this.state.password

    this.props.handleUserSubmit(
      {userName, password}
    )
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
    const { userName, password } = this.state

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <TextInput
          placeholder='Username or Email'
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

        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            onPress={this.handleSubmit}
            style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20
  },
  inputField: {
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
}
