import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Logo, Button, CardSection, Spinner } from './components/util/'
import AppNavigator from './components/navigator/AppNavigator'
import Login from './components/login/Login'


export default class App extends Component {

  state = {
    userAuthenticated: false
  }

  render() {
    const { userAuthenticated } = this.state

    if (!userAuthenticated) {
      return (
        <Login />
      )
    }

    return (
          <AppNavigator />
    )
  }
}
