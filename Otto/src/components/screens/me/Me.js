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

  handleCallPress = () => {
    this.props.navigation.navigate('RecentCall')
  }

  handleTextPress = () => {
    this.props.navigation.navigate('RecentText')
  }

  handleEmailPress = () => {
    this.props.navigation.navigate('RecentEmail')
  }

  handleSignOut = () => {
    console.log(`USER SIGNED OUT`)
    onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
  }

  render() {
    return (
      <ScrollView style={styles.container}>

          <View style={styles.avatarContainer}>
            <Tile
              imageSrc={{ uri: this.props.picture.large}}
              imageContainerStyle={{ 
                width: 300,
                height: 300,
                borderRadius: 300/2, 
                marginTop: 15,
                marginLeft: 'auto',
                marginRight: 'auto'
                }}
              featured
            />
          </View>

        <View style={styles.contentContainer}>
         <Card
            containerStyle={
              {borderRadius: 15, borderColor: `#1FFFDA`, width: 275, padding: 10, alignSelf: 'stretch',
              marginTop: 30, backgroundColor: `#1FFFDA`}}>
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`, width: 200, marginLeft: 'auto', marginRight: 'auto'}}
                icon={{name: 'phone', type: 'material', color: 'green'}}
                title='Recent Calls'
                color='white'
                fontWeight='500'
                
                onPress={this.handleCallPress} />
              <Button
                borderRadius={100}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`, width: 200, marginLeft: 'auto', marginRight: 'auto'}}
                icon={{name: 'forum', type: 'material', color: 'lightskyblue'}}
                onPress={this.handleTextPress}
                color='white'
                fontWeight='500'
                
                title='Recent Texts' />
              <Button
                borderRadius={100}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`, width: 200, marginLeft: 'auto', marginRight: 'auto'}}
                icon={{name: 'email', type: 'material', color: 'white'}}
                onPress={this.handleEmailPress}
                color='white'
                fontWeight='500'
                
                title='Recent Emails' />
                <Button
                borderRadius={100}
                raised
                large
                buttonStyle={{backgroundColor: `#001a33`, width: 200, marginLeft: 'auto', marginRight: 'auto'}}
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
    backgroundColor: `#001a33`,
  },
  avatarContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
  },
}
