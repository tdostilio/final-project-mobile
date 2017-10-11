import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';


export default class CloseFriends extends Component {
  state = {

  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>

        <ScrollView>
        <Text>Close Friends Main Body</Text>
        </ScrollView>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`
  }
}
