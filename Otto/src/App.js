import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Root, Tabs } from './components/router/router'


export default class App extends Component {

  state = {

    userAuthenticated: true,
    userReceived: false,
    checkUserAuthentication: false,
    firstTimeUser: false
  }

  handleUserSubmit = (user) => {
    this.setState({userReceived: true})
  }

  handleUserCreate = (user) => {

  }

  render() {
    const { userAuthenticated, userReceived } = this.state

    if (!userReceived && !userAuthenticated) {
      return (
        <Login
        handleUserSubmit={this.handleUserSubmit}
        />
      )
    }

    return (
          <Root />
    )
  }
}
