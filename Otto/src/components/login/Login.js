import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


export default class Login extends Component {

  state = {
    timePassed: false
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Text>
            Login Screen
          </Text>
        </View>

        <View style={styles.formContainer}>
          
        </View>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue'
  },
  logoContainer: {

  },
  formContainer: {

  }
}
