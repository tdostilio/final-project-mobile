import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import { List, ListItem, SearchBar } from 'react-native-elements'
import { users } from '../../router/data'

export default class Contacts2 extends Component {

  state = {
    search: ''
  }

  sortArray = (array, text) => {
    return array.filter( (person) => {
        return person.givenName.search(text) !== -1;
    });
  }

  handleSearch = (text) => {
    this.setState({search: text}, () => {
        if (this.state.search.length === 0) {
            this.setState({searching: null})
        }
        this.setState({searching: this.sortArray(this.state.contacts, this.state.search)})
    })
  }

  onLearnMore = (user) => {
    this.props.navigation.navigate('Contacts2Detail', { ...user })
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: `#001a33`}}>
                  <View>
                <SearchBar
                    round
                    inputStyle={{color: '#1EBF9E', backgroundColor: 'black'}}
                    containerStyle={{backgroundColor: 'black'}}
                    onChangeText={this.handleSearch}
                    value={this.state.search}
                    placeholder='Search ...'
                />
            </View>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              subtitleStyle={{color: '#1EBF9E'}}
              onPress={() => this.onLearnMore(user)}
              titleStyle={{color: '#eee'}}
              containerStyle={{backgroundColor: `#001a33`}}
              chevronColor={'#5D8DAD'}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}
