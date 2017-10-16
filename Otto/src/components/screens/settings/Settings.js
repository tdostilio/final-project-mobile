import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import mainlogo from '../../../static/images/mainlogo.png'

import { onSignOut } from "../../auth/Auth";

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
    onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
  }
  
  render() {
    const { loading, contactSync, smsSync, callSync, pushNotifications } = this.state
    return (
      <ScrollView style={styles.container}>
        <View>

          {/* <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Syncing</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Contact Sync"
                titleStyle={{color: '#eee'}}
                onSwitch={val => {this.setState(prevState => ({contactSync: !(prevState.contactSync)}),this.handleContactPress)}}
                switched={contactSync}
                hideChevron
                switchButton
                switchThumbTintColor='#5D8DAD'
                switchOnTintColor='#2980b9'
                switchTintColor='#5D8DAD'
              />
              <ListItem
                title="SMS Sync"
                titleStyle={{color: '#eee'}}
                onSwitch={val => {this.setState(prevState => ({smsSync: !(prevState.smsSync)}),this.handleSMSPress)}}
                switched={smsSync}
                hideChevron
                switchButton
                switchThumbTintColor='#5D8DAD'
                switchOnTintColor='#2980b9'
                switchTintColor='#5D8DAD'
              />
              <ListItem
                title="Call Sync"
                titleStyle={{color: '#eee'}}
                onSwitch={val => {this.setState(prevState => ({callSync: !(prevState.callSync)}),this.handleCallPress)}}
                switched={callSync}
                hideChevron
                switchButton
                switchThumbTintColor='#5D8DAD'
                switchOnTintColor='#2980b9'
                switchTintColor='#5D8DAD'
              />
            </List>
          </View> */}

          <View>
            <View style={styles.headerContainer}>
            <View style={styles.centerLogo}>
              <Image
              style={styles.logo}
              source={mainlogo}
              />
            </View>
              <Text style={styles.headerTitle}>Device</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title={`Push Notifications`}
                titleStyle={{color: '#eee'}}
                onSwitch={val => {this.setState(prevState => ({pushNotifications: !(prevState.pushNotifications)}),this.handlePushPress)}}
                switched={pushNotifications}
                hideChevron
                switchButton
                switchThumbTintColor='dodgerblue'
                switchOnTintColor='#2980b9'
                switchTintColor='dodgerblue'
              />
              {pushNotifications && <Text style={{color: 'red'}}> Sorry this feature is pending </Text>}
            </List>
          </View>

          {/* <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Edit</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Profile"
                titleStyle={{color: '#eee'}}
                chevronColor='#2980b9'
              />
              <ListItem
                title="Password"
                titleStyle={{color: '#eee'}}
                chevronColor='#2980b9'
              />
            </List>
          </View> */}

          {/* <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Feedback</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Give us Feedback"
                titleStyle={{color: '#eee'}}
                hideChevron
              />
              <ListItem
                title="Report a Bug"
                titleStyle={{color: '#eee'}}
                hideChevron
              />
            </List>
          </View> */}

          {/* <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Legal</Text>
            </View>
            <List style={styles.container}>
              <ListItem
                title="Private Policy"
                titleStyle={{color: '#eee'}}
                hideChevron
              />
              <ListItem
                title="Terms of Service"
                titleStyle={{color: '#eee'}}
                hideChevron
              />
            </List>
          </View> */}

          <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Sign Out</Text>
            </View>
              <List style={styles.container}>
                <ListItem
                  title="Sign Out"
                  titleStyle={{color: '#eee'}}
                  rightIcon={{ name: 'cancel', color: 'dodgerblue' }}
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
    backgroundColor: `#001a33`
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
    color: '#1FFFDA'
  },
  centerLogo: {
    alignItems: 'center',
    marginTop: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20

  },
}
