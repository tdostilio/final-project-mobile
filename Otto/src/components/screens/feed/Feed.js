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
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                title='Yes'
                color='#b6ccda'
                onPress={this.handleYesPress} 
                />
                <Button
                borderRadius={75}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                title='No'
                color='#b6ccda'
                onPress={this.handleNoPress} 
                />
                <Button
                borderRadius={75}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                title='Call'
                color='#b6ccda'
                onPress={this.handleCallPress} 
                />
                <Button
                borderRadius={75}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#5D8DAD`}}
                title='Text'
                color='#b6ccda'
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
  optionButtonStyle: {
    marginBottom: 5, 
    backgroundColor: `#222A43`, 
    borderWidth: 1, 
    borderColor: 'red'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  optionsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  optionsGroupContainer: {
    borderWidth: 1,
    borderColor: '#5D8DAD',
    
  }
}
