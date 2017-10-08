import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { List, ListItem, Button, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class AddReminder extends Component {
  state = {
    name: '',
    phone: '',
    notes: '',
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  backToHome = () => {
    this.props.navigation.goBack(null)
  }

  handleNameChange = (text) => {
    this.setState({name: text})
  }

  handleNotesChange = (text) => {
    this.setState({notes: text})
  }
  
  render() {
    const { navigate } = this.props.navigation
    const {name, phone, notes } = this.state
    return (
      <View style={styles.container}>

        <ScrollView>
          <FormLabel>Name</FormLabel>
          <FormInput value={name} onChangeText={this.handleNameChange}/>
          <FormLabel>Date</FormLabel>
          <FormInput onChangeText={this.handleNameChange}/>
          <FormLabel>Notes</FormLabel>
          <FormInput value={notes} onChangeText={this.handleNotesChange}/>
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
            title='Back to Feed' />
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
