import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'


export default class LoginForm extends Component {
  render() {
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
        />
        <TextInput
          secureTextEntry
          placeholder='Password'
          style={styles.inputField}
          returnKeyType='go'
          ref={input => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
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
