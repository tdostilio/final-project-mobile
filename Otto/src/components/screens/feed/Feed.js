import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Icon, Button} from 'react-native-elements';
import ReminderOptions from './ReminderOptions';

export default class Feed extends Component {
  state = {

  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  handleAddReminderPress = () => {
    this.props.navigation.navigate('AddReminder')
  }
  
  render() {
    const { navigate } = this.props.navigation
    const { loading, contactSync, smsSync, callSync, pushNotifications } = this.state
    return (

      <View style={styles.container}>
      

        <ScrollView>
          <ReminderOptions/>
          <ReminderOptions/>
          <ReminderOptions/>
        </ScrollView>
      
        <View style={styles.buttonContainer}>
        <Icon
          raised={true}
          name='add-circle'
          onPress={this.handleReminderPress}
          underlayColor='#222A43'
          type='material'
          color='#1E90FF'
          reverse={true}
          reverseColor='#fff'
          onPress={this.handleAddReminderPress} />
        </View>
      
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`,
    flexDirection: 'column'
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    margin: 20
  },
}
