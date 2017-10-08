import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { users } from '../../router/data'

export default class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user })
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: `#222A43`}}>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
              titleStyle={{color: '#eee'}}
              containerStyle={{backgroundColor: `#222A43`}}
              chevronColor={'#1EBF9E'}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}
