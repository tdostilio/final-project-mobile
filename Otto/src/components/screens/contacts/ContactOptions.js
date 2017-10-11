import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Communications from 'react-native-communications';
import mainlogo from '../../../static/images/mainlogo.png';

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
                <View style={styles.centerLogo}>
                    <Image
                    style={styles.logo}
                    source={mainlogo}
                    />
                </View>
                <View>
                    <Text style={styles.textStyle}>What would you like to do?</Text>
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
      backgroundColor: `#222A43`,
    },
    centerLogo: {
        alignItems: 'center',
        marginTop: 20
    },
    textStyle: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 22,
        fontWeight: `500`,
        color: `#222A43`
    },
    logo: {
        width: 100,
        height: 100,
    },
  }
  

export default ContactOptions;