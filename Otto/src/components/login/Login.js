import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'

import mainlogo from '../../static/images/mainlogo.png'
import LoginForm from './LoginForm'


export default class Login extends Component {

  state = {
    timePassed: false
  }

  render() {
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
          <LoginForm />
        </View>

      </KeyboardAvoidingView>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
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
  formContainer: {

  }
}
