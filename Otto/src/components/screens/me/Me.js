import React, { Component } from 'react'
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native'


export default class Me extends Component {

  handleTextPress = (e) => {
    console.log(e)
  }

  handleEmailPress = (e) => {
    console.log(e)
  }

  handlePhonePress = (e) => {
    console.log(e)
  }

  handleEventPress = (e) => {
    console.log(e)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text
            style={{fontSize: 24, color: '#156497'}}>
            Welcome Pill Murray!
          </Text>
        </View>

        <View style={styles.profilePhotoContainer}>
          <Image
            style={styles.profilePhoto}
            source={require('./../../../static/images/pill_murray.png')}
          />
        </View>

        <View style={styles.contentContainer}>
          <Button onPress={this.handleTextPress} style={styles.button} title="Recent Text Message"></Button>
          <Button onPress={this.handleEmailPress} style={styles.button} title="Recent Email"></Button>
          <Button onPress={this.handlePhonePress} style={styles.button} title="Recent Phone Call"></Button>
          <Button onPress={this.handleEventPress} style={styles.button} title="Recent Event"></Button>
        </View>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#C5E4DB`
  },
  headerContainer: {
    marginBottom: 15
  },

  profilePhotoContainer: {
    marginBottom: 15
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    padding: 10
  },

  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'blue'
  }
}
