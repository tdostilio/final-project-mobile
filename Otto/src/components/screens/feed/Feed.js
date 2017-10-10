import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

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
      
        <ScrollView style={styles.optionsContainer}>
          <Text style={{ color: 'white' }}>Have you talked to Mom recently?</Text>
            <Button
            borderRadius={50}
            raised
            large
            buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
            icon={{name: 'smartphone', type: 'material', color: '#b6ccda'}}
            title='Yes'
            color='#b6ccda'
            onPress={this.handleCallPress} 
            />
            <Button
            borderRadius={50}
            raised
            large
            buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
            icon={{name: 'smartphone', type: 'material', color: '#b6ccda'}}
            title='No'
            color='#b6ccda'
            onPress={this.handleCallPress} 
            />
            <Button
            borderRadius={50}
            raised
            large
            buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
            icon={{name: 'smartphone', type: 'material', color: '#b6ccda'}}
            title='Call'
            color='#b6ccda'
            onPress={this.handleCallPress} 
            />
            <Button
            borderRadius={50}
            raised
            large
            buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
            icon={{name: 'smartphone', type: 'material', color: '#b6ccda'}}
            title='Text'
            color='#b6ccda'
            onPress={this.handleCallPress} 
            />
        </ScrollView>
      
        <View style={styles.buttonContainer}>
        <Icon
          raised={true}
          name='add-circle'
          onPress={this.handleReminderPress}
          underlayColor='#222A43'
          type='material'
          color='#5D8DAD'
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
    backgroundColor: `#222A43`
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    margin: 20
  },
  optionsContainer: {
    flexDirection: 'row',
  }
}
