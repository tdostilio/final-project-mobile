import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';

export default class RecentEmail extends Component {
  state = {

  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  backToHome = () => {
    this.props.navigation.goBack(null)
  }
  
  render() {
    const { navigate } = this.props.navigation
    const { loading, contactSync, smsSync, callSync, pushNotifications } = this.state
    return (
      <View style={styles.container}>

        <ScrollView>
        <Text style={styles.headerStyle}>Email History</Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            large
            buttonStyle={{ marginTop: 20, marginBottom: 20 }}
            borderRadius={5}
            raised
            backgroundColor={`#1E90FF`}
            icon={{name: 'backspace', type: 'material'}}
            onPress={this.backToHome}
            title='Back to home' />
        </View>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`
  },
  headerStyle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600'
  }
}
