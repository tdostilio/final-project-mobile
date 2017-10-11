import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Icon, Button} from 'react-native-elements';

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

  handleYesPress = () => {
    this.props.navigation.navigate('')
  }
  handleNoPress = () => {
    this.props.navigation.navigate('')
  }
  handleCallPress = () => {
    this.props.navigation.navigate('')
  }
  handleTextPress = () => {
    this.props.navigation.navigate('')
  }
  
  render() {
    const { navigate } = this.props.navigation
    const { loading, contactSync, smsSync, callSync, pushNotifications } = this.state
    return (

      <View style={styles.container}>
      
        <ScrollView>
          <View style={styles.optionsGroupContainer}>
            <View style={styles.optionsContainer}>
              <Text style={{ color: "white" }}>Have you talked to [Contact] recently?</Text>
            </View>
              <View style={styles.optionsButtonContainer}>
                <Button
                borderRadius={75}
                raised
                medium
                buttonStyle={{marginBottom: 5, backgroundColor: `green`}}
                title='Yes'
                color='white'
                onPress={this.handleYesPress} 
                />
                <Button
                borderRadius={75}
                raised
                medium
                buttonStyle={{marginBottom: 5, backgroundColor: `red`}}
                title='No'
                color='white'
                onPress={this.handleNoPress} 
                />
                <Button
                borderRadius={75}
                raised
                medium
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                icon={{name: 'phone', type: 'material', color: 'white'}}
                title='Call'
                color='white'
                onPress={this.handleCallPress} 
                />
                <Button
                borderRadius={75}
                raised
                medium
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                icon={{name: 'smartphone', type: 'material', color: 'white'}}
                title='Text'
                color='white'
                onPress={this.handleTextPress} 
                />
              </View>
            </View>
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
    backgroundColor: `#222A43`,
    flexDirection: 'column'
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    margin: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  optionsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  optionsGroupContainer: {
    borderWidth: 1,
    borderColor: '#5D8DAD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  }
}
