import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'dodgerBlue',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
