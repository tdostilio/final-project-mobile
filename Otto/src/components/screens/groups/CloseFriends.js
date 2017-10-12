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
        <Text style={styles.headerStyle}>Best Friends</Text>
        </ScrollView>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#001a33`
  },
  headerStyle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600'
  }
}
