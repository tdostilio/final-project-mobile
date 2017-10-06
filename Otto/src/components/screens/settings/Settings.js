import React, { Component } from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import LottiePlayer from '../../util/LottiePlayer'


export default class Settings extends Component {
  
  state = {
    loading: true,
    contactSync: false,
    smsSync: false,
    callSync: false,
    pushNotifications: false
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  handleContactPress = () => {
    // ajax call
    console.log('contact pressed')
  }

  handleSMSPress = () => {
    // ajax call
    console.log('sms pressed')
  }

  handleCallPress = () => {
    // ajax call
    console.log('call pressed')
  }

  handlePushPress = () => {
    // ajax call
    console.log('push pressed')
  }

  handleSignOut = () => {
    // native call to signout
    console.log('sign out')
  }

  render() {
    const { navigate } = this.props.navigation
    const { loading, contactSync, smsSync, callSync, pushNotifications } = this.state

    if (!loading) {
      return (
        <LottiePlayer />
      )
    }

    return (
      <ScrollView>
        <View style={styles.container}>

          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Syncing</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Contact Sync"
                onSwitch={val => {this.setState(prevState => ({contactSync: !(prevState.contactSync)}),this.handleContactPress)}}
                switched={contactSync}
                hideChevron
                switchButton
                switchThumbTintColor='#156497'
                switchOnTintColor='#2980b9'
                switchTintColor='#156497'
              />
              <ListItem
                title="SMS Sync"
                onSwitch={val => {this.setState(prevState => ({smsSync: !(prevState.smsSync)}),this.handleSMSPress)}}
                switched={smsSync}
                hideChevron
                switchButton
                switchThumbTintColor='#156497'
                switchOnTintColor='#2980b9'
                switchTintColor='#156497'
              />
              <ListItem
                title="Call Sync"
                onSwitch={val => {this.setState(prevState => ({callSync: !(prevState.callSync)}),this.handleCallPress)}}
                switched={callSync}
                hideChevron
                switchButton
                switchThumbTintColor='#156497'
                switchOnTintColor='#2980b9'
                switchTintColor='#156497'
              />
            </List>
          </View>

          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Device</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Push Notifications"
                onSwitch={val => {this.setState(prevState => ({pushNotifications: !(prevState.pushNotifications)}),this.handlePushPress)}}
                switched={pushNotifications}
                hideChevron
                switchButton
                switchThumbTintColor='#156497'
                switchOnTintColor='#2980b9'
                switchTintColor='#156497'
              />
            </List>
          </View>

          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Edit</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Profile"
                chevronColor='#2980b9'
              />
              <ListItem
                title="Password"
                chevronColor='#2980b9'
              />
            </List>
          </View>

          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Feedback</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Give us Feedback"
                hideChevron
              />
              <ListItem
                title="Report a Bug"
                hideChevron
              />
            </List>
          </View>

          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Legal</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Private Policy"
                hideChevron
              />
              <ListItem
                title="Terms of Service"
                hideChevron
              />
            </List>
          </View>

          <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Sign Out</Text>
            </View>
              <List style={styles.container}>
                <ListItem
                  title="Sign Out"
                  rightIcon={{ name: 'cancel', color: '#2980b9' }}
                  onPress={this.handleSignOut}
                />
              </List>
          </View>

        </View>
      </ScrollView>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#C5E4DB`
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    marginTop: 20,
    padding: 0,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#156497'
  }
}
