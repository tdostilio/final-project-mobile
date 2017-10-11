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
    console.log('sign out')
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
              {borderRadius: 15, borderColor: `#1EBF9E`, padding: 10, alignSelf: 'stretch',
              marginTop: 15, backgroundColor: `#1EBF9E`}}>
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'smartphone', type: 'material', color: '#b6ccda'}}
                title='Recent Calls'
                color='#b6ccda'
                onPress={this.handleCallPress} />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'comment', type: 'font-awesome', color: '#b6ccda'}}
                onPress={this.handleTextPress}
                color='#b6ccda'
                title='Recent Texts' />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'email', type: 'material', color: '#b6ccda'}}
                onPress={this.handleEmailPress}
                color='#b6ccda'
                title='Recent Emails' />
         </Card>
        </View>
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Sign Out</Text>
            </View>
              <List style={styles.container}>
                <ListItem
                  title="Sign Out"
                  titleStyle={{color: '#eee'}}
                  rightIcon={{ name: 'cancel', color: '#2980b9' }}
                  onPress={this.handleSignOut}
                />
              </List>
          </View>

      </ScrollView>
    )
  }
}

const styles = {
  container: {
    backgroundColor: `#222A43`
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
