import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import config from '../../util/api/config';
import Result from './Result'


export default class GroupAdd extends Component {

  state = {
    information: '',
    credentials: null,
    userAddedToGroup: {}
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
        title: "Close Friend",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'mood', type: 'material'}
      },
      {
        title: "Friend",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'group', type: 'material'}
      }
    ]
  }

  componentWillMount() {
    let information = this.props.navigation.state.params.information
    let credentials = JSON.parse(this.props.navigation.state.params.credentials._55)
    this.setState({information, credentials})
  }

  findMobileNumber = (keyName, phoneNumberArray) => {
    for (var i=0; i < phoneNumberArray.length; i++) {
        if (phoneNumberArray[i].label === keyName) {
            return phoneNumberArray[i].number;
        }
      }
    return phoneNumberArray[0].number
  }

  // adds contact to group
  sendRequest = async (endpoint) => {
    let path = endpoint.replace(/\s/g, "");
    let id = this.state.credentials.id
    let person = this.state.information;
    let token = this.state.credentials.token
    let primaryPhoneNumber = this.findMobileNumber('mobile', person.phoneNumbers)

    try {
      const result = await axios.post(config.CREATE_GROUP(path, id), {
        userId: id,
        firstName: person.givenName,
        lastName: person.familyName,
        phoneNumber: primaryPhoneNumber
      },{headers: {"Authorization": "jwt " + token}})
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        })
        console.log('result', result);
        this.setState({userAddedToGroup: Object.assign(result, {groupName: endpoint})})

    } catch(e) {
      console.log(e)
    }

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
          backgroundColor={`#1E90FF`}
          icon={item.icon}
          onPress={() => {
            //Console logs just for debugging:
            console.log('the contact we are adding is: ' + this.state.information.givenName + ' ' + this.state.information.familyName + ' to group: '+ item.title)
            console.log('the userId is: ' + this.state.credentials.id)
            console.log('the users token is: ' + this.state.credentials.token)

            // user gets succesfully added to db render success component else return validation error msg under button
            this.sendRequest(item.title)
          }}
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
    const { information, loading, search, userAddedToGroup } = this.state
    console.log(userAddedToGroup)

    if (Object.keys(userAddedToGroup).length > 0) {
      return <Result
                person={information}
                backToPrevious={this.backToPrevious}
                result={userAddedToGroup} />
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
              What group would you like to add  
                <Text style={{color: '#1FFFDA'}}>
                  {' '+ this.state.information.givenName + ' ' + this.state.information.familyName + ' '}
                </Text> 
              to?
            </Text>
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
    backgroundColor: `#001a33`,
    justifyContent: 'center',
  },
  subtitle: {
    color: 'white'
  },
  title: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginTop: 40
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 40,
    backgroundColor: `#001a33`, 
    justifyContent: 'center',
    marginBottom: 10
  },
}
