import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';

export default class RecentCall extends Component {
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
        <Text>Main Body</Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            large
            buttonStyle={{ marginTop: 20, marginBottom: 20 }}
            borderRadius={5}
            raised
            backgroundColor={`#5D8DAD`}
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
  }
}
