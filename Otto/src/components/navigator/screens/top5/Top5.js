import React, { Component } from 'react'
import { Button, View } from 'react-native'


export default class Top5 extends Component {

  static navigationOptions = {
    title: 'Top 5',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
        <View>
        <Button
        title="Go to Welcome"
        onPress={() =>
            navigate('Welcome')
        }
        />
        <Button
        title="Go to Home"
        onPress={() =>
        navigate('Home')
        }
        />
        <Button
        title="Go to Groups"
        onPress={() =>
            navigate('Groups')
        }
        />
      </View>
    )
  }
}
