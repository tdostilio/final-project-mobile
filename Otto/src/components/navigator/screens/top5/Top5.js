import React, { Component } from 'react'
import { Button, View } from 'react-native'

import Header from '../../util/Header'


export default class Top5 extends Component {

  static navigationOptions = {
    title: 'Top 5',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
        <View>
          <Header navigate={navigate}/>
        </View>
    )
  }
}
