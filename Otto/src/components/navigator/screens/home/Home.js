import React, { Component } from 'react'
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native'

import Header from '../../util/Header'


export default class Home extends Component {

    static navigationOptions = {
      title: 'Home',
    }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
      <Header navigate={navigate}/>
        <Image
          source={{uri: 'https://vignette2.wikia.nocookie.net/ghostbusters/images/1/11/Bill_Murray.jpeg/revision/latest?cb=20081013140955'}}
          style={{height: 500, width: 500, borderWidth: 1, borderColor: 'red' }}
        />
      </View>
    )
  }
}
