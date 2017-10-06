import React, { Component } from 'react'
import {
  TouchableOpacity, ActivityIndicator,
  ListView, Button, Text, View, Image
} from 'react-native'


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

  handleReminderPress = (e) => {
    console.log(e)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text
            style={styles.headerText}>
            Welcome Stephen Grider!
          </Text>
          <Text
            style={{marginLeft: 100, marginRight: 100, color: 'royalblue'}}>
            "Hot Dog!"
          </Text>
        </View>

        <View style={styles.profilePhotoContainer}>
          <Image
            style={styles.profilePhoto}
            source={require('./../../../static/images/theGrider.jpeg')}
          />
        </View>

        <View style={styles.contentContainer}>

          <TouchableOpacity
            onPress={this.handlePhonePress}
            style={styles.buttonContainer}>
            <Text
              onPress={this.handlePhonePress}
              style={styles.buttonText}>
              Phone Call History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleTextPress}>
            <Text
              onPress={this.handleTextPress}
              style={styles.buttonText}>
              Text Message History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleEmailPress}>
            <Text
              onPress={this.handleEmailPress}
              style={styles.buttonText}>
              Email History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleEmailPress}>
            <Text
              onPress={this.handleReminderPress}
              style={styles.buttonText}>
              Reminders
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  } // Render
} // Me Component


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
  headerText: {
    fontSize: 24,
    color: '#156497'
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
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    width: 200,
    borderRadius: 5,
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
}
