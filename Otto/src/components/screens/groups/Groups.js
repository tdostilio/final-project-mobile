import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'


export default class Groups extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
          <Text>Groups Screen</Text>
        </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#C5E4DB`
  }
}
