import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


export default class GroupAdd extends Component {

  state = {
    information: ''
  }

  static defaultProps = {
    template: [
      {
        title: "Family",
        subTitle: "Reminders scheduled every 5 to 7 days...",
        value: 80,
        icon: {name: 'favorite', type: 'material'}
      },
      {
        title: "Close Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'face', type: 'material'}
      },
      {
        title: "Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'group', type: 'material'}
      }
    ]
  }

  componentWillMount() {
    let information = this.props.navigation.state.params
    this.setState({information})
  }

  findMobileNumber(keyName, phoneNumberArray) {
      for (var i=0; i < phoneNumberArray.length; i++) {
          if (phoneNumberArray[i].label === keyName) {
              return phoneNumberArray[i].number;
          }
        }
      return phoneNumberArray[0].number
  }

  sendRequest = () => {
    let person = this.state.information
    axios.post('/create', {
      firstName: person.givenName,
      lastName: person.familyName,
      phoneNumber: this.findMobileNumber('mobile', person.phoneNumbers)
    })
  }

  renderTemplates = () => (
    this.props.template.map((item, index) => {
      return (
          <Button
          key={index}
          large
          buttonStyle={{ marginTop: 20, marginBottom: 20 }}
          borderRadius={5}
          raised
          backgroundColor={`#5D8DAD`}
          icon={item.icon}
          onPress={this.sendRequest}
          title={item.title}
          />
      )
    })
  )

  backToPrevious = () => {
    this.props.navigation.goBack(null)
    }


  render() {
    const { navigate } = this.props.navigation
    const { loading, search } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>What group would you like to add [contact] to?</Text>
        </View>
        <ScrollView>
          <View style={styles.buttonContainer}>
            {this.renderTemplates()}
          </View>
          <View style={styles.buttonContainer}>
                <Button
                    large
                    buttonStyle={{ marginTop: 20, marginBottom: 20 }}
                    borderRadius={5}
                    raised
                    backgroundColor={`red`}
                    icon={{name: 'backspace', type: 'material'}}
                    onPress={this.backToPrevious}
                    title='Back' />
                </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`,
    justifyContent: 'center',
  },
  subtitle: {
    color: 'white'
  },
  title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 50,
    backgroundColor: `#222A43`,
    justifyContent: 'center',
    marginBottom: 10
  },
}
