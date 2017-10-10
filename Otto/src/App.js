import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { isSignedIn, onSignOut } from "./components/auth/Auth";
import { createRootNavigator } from './components/router/Router'



export default class App extends Component {

  state = {
    signedIn: false,
    checkedSignIn: false
  }

  componentWillMount() {
    this.doSignIn()
  }

  doSignIn = () => {
    isSignedIn()
    .then(res => {
      console.log(res)
      this.setState({ signedIn: res, checkedSignIn: true })})
    .catch(err => {console.log(err); alert(err)});
  }

  render() {
    console.ignoredYellowBox = ['Remote debugger']; // removes debugger yellow warning
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, render a loading spinner (Lottie goes here)
    if (!checkedSignIn) {
      return null;
    }

    // After promise/authorization gets resolved.. Layout will render. No token = Login. Token = Tabs
    const Layout = createRootNavigator(signedIn);

    return (
      <Layout />
    )
  }
}
