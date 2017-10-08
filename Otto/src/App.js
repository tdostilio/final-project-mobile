import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { isSignedIn } from "./components/auth/Auth";
import { createRootNavigator } from './components/router/Router'



export default class App extends Component {

  state = {
    signedIn: false,
    checkedSignIn: false
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }


  handleUserSubmit = (user) => {
    this.setState({userReceived: true})
  }

  handleUserCreate = (user) => {

  }

  render() {
    console.ignoredYellowBox = ['Remote debugger']; // removes debugger yellow warning
    const { checkedSignIn, signedIn } = this.state;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
