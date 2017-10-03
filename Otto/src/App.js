import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './components/unique/WelcomePage';
import { Logo, Button, CardSection, Spinner } from './components/common';
import LottiePlayer from './components/unique/LottiePlayer';

export default class App extends React.Component {
  render() {
    return (
        // <LottiePlayer /> 
        <View>
          <Logo headerText='Otto'/>
          <WelcomePage />
        </View>
    );
  }
}