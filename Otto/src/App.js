import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Logo, Button, CardSection, Spinner } from './components/util/'
import AppNavigator from './components/navigator/AppNavigator'
import Login from './components/login/Login'

import './components/util/LottiePlayer'


export default class App extends Component {

  state = {
    userReceived: false,
    checkUserAuthentication: false,
    userAuthenticated: false
  }

  handleUserSubmit = (user) => {
    this.setState({userReceived: true})
  }

  render() {
    const { userAuthenticated } = this.state

    if (!userReceived) {
      return (
        <Login
        handleUserSubmit={this.handleUserSubmit}
        />
      )
    }

    return (
          <AppNavigator />
    )
  }
}
