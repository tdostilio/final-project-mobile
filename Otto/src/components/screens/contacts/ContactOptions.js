import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Communications from 'react-native-communications';

class ContactOptions extends Component {
    state = {information: ''}
    
    componentWillMount() {
        let information = this.props.navigation.state.params
        this.setState({information})
    }
    callContact = () => {
        Communications.phonecall(this.state.information.phoneNumbers[0]['number'], true)
    }

    textContact = () => {
        Communications.text(this.state.information.phoneNumbers[0]['number'], 'Hey! How have you been?')
    }

    backToContacts = () => {
        this.props.navigation.goBack(null)
    }

    render() {
        const { navigate } = this.props.navigation
        console.log(this.props.navigation)
        debugger
        return (
            <View>
                <View>
                    <Text>What would you like to do?</Text>
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    large
                    buttonStyle={{ marginTop: 20, marginBottom: 20 }}
                    borderRadius={5}
                    raised
                    backgroundColor={`#5D8DAD`}
                    icon={{name: 'group', type: 'material'}}
                    onPress={this.backToContacts}
                    title='Add to Group' />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    large
                    buttonStyle={{ marginTop: 20, marginBottom: 20 }}
                    borderRadius={5}
                    raised
                    backgroundColor={`#5D8DAD`}
                    icon={{name: 'phone', type: 'material'}}
                    onPress={this.callContact}
                    title='Call' />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    large
                    buttonStyle={{ marginTop: 20, marginBottom: 20 }}
                    borderRadius={5}
                    raised
                    backgroundColor={`#5D8DAD`}
                    icon={{name: 'message', type: 'material'}}
                    onPress={this.textContact}
                    title='Text' />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    large
                    buttonStyle={{ marginTop: 20, marginBottom: 20 }}
                    borderRadius={5}
                    raised
                    backgroundColor={`#5D8DAD`}
                    icon={{name: 'backspace', type: 'material'}}
                    onPress={this.backToContacts}
                    title='Back to Contacts' />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: `#222A43`
    }
  }
  

export default ContactOptions;