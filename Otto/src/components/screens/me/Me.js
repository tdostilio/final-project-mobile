import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { Card, Header, Tile, List, ListItem, Button } from 'react-native-elements'

import config from '../../util/api/config'
import { me } from '../../router/data'

import { onSignOut } from "../../auth/Auth";

export default class Me extends Component {

  state = {
  }

  static defaultProps = {
    ...me
  }

  componentWillMount() {
  }

  handleCallPress = () => {
    this.props.navigation.navigate('RecentCall')
  }

  handleTextPress = () => {
    this.props.navigation.navigate('RecentText')
  }

  handleEmailPress = () => {
    this.props.navigation.navigate('RecentEmail')
  }
///////////////
  handleSignOut = () => {
    // native call to signout
    console.log(`USER SIGNED OUT`)
    onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.avatarContainer}>
          <Tile
            imageSrc={{ uri: this.props.picture.large}}
            featured
          />
        </View>

        <View style={styles.contentContainer}>
         <Card
            containerStyle={
              {borderRadius: 15, borderColor: `#1FFFDA`, padding: 10, alignSelf: 'stretch',
              marginTop: 15, backgroundColor: `#1FFFDA`}}>
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                icon={{name: 'phone', type: 'material', color: 'green'}}
                title='Recent Calls'
                color='white'
                
                onPress={this.handleCallPress} />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                icon={{name: 'forum', type: 'material', color: 'lightskyblue'}}
                onPress={this.handleTextPress}
                color='white'
                
                title='Recent Texts' />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                icon={{name: 'email', type: 'material', color: 'white'}}
                onPress={this.handleEmailPress}
                color='white'
                
                title='Recent Emails' />
                <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                icon={{name: 'exit-to-app', type: 'material', color: 'firebrick'}}
                onPress={this.handleSignOut}
                color='white'
                fontWeight='500'
                title='Sign Out' />
         </Card>
        </View>

      </ScrollView>
    )
  }
}

const styles = {
  container: {
    backgroundColor: `#001a33`
  },
  avatarContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
}
