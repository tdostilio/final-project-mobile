import React, { Component } from 'react'
import { AsyncStorage, View, ScrollView, Text, RefreshControl } from 'react-native'
import { List, ListItem, Icon, Button} from 'react-native-elements'
import axios from 'axios'
import LottieGears from '../../util/LottieGears'
import ReminderOptions from './ReminderOptions'
import config from '../../util/api/config'

import Communications from 'react-native-communications';
export default class Feed extends Component {
  state = {
    credentials: '',
    payload: [],
    payloadStatus: false,
    refreshing: false
  }

  async componentDidMount() {
    try {
      const credentials = await AsyncStorage.getItem(config.USER_INFO)
      console.log(credentials)
      await this.setState({credentials: JSON.parse(credentials)})
      console.log('state after first paint', this.state)

      this.fetchPayload()

      } catch (error) {
        console.log(error)
      }
  }

  fetchPayload = async () => {
    try {
      const id = this.state.credentials.id
      const token = this.state.credentials.token
      const result = await axios.get(config.GET_GROUP(config.FEED, id),
      {headers: {"Authorization": "jwt " + token}})
      console.log('received payload', result.data.payload)

      // for user with no contacts added to a group
      if (result.data.payload.length < 1) {
        await this.setState({payload: false, payloadStatus: true, refreshing: false}, () => {
          console.log('payload has no contacts')
        })
      } else {
        // for user with contacts in a group
        await this.setState({payload: result.data.payload, payloadStatus: true, refreshing: false}, () => {
          console.log('payload has contacts')
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.fetchPayload();
    })
  }

  handleYesClick = () => {
    let contacts = this.state.payload
    
    console.log('yes clicked')
  }

  handleNoClick = () => {
    console.log('no clicked')
  }

  handleCallPress = (phone) => {
    console.log(phone);
    Communications.phonecall(phone, true)
  }

  handleTextPress = (phone) => {
    console.log('text pressed ' + phone)
    Communications.text(phone, 'Hey! How have you been?')
  }


  handleAddReminderPress = () => {
    this.props.navigation.navigate('AddReminder')
  }
  
  render() {
    const { navigate } = this.props.navigation
    const { credentials, payload, payloadStatus, refreshing } = this.state
    if (!payloadStatus) return <View style={styles.container}><LottieGears /></View>
    console.log(this.state)

    return (
      <List
        style={styles.container}>

        <ReminderOptions
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          handleYesClick={this.handleYesClick}
          handleNoClick={this.handleNoClick}
          handleCallPress={this.handleCallPress}
          handleTextPress={this.handleTextPress}
          payload={payload}
          credentials={credentials}
        />

        <View style={styles.buttonContainer}>
          <Icon
            raised={true}
            name='add-circle'
            onPress={this.handleReminderPress}
            underlayColor='#001a33'
            type='material'
            color='#1FFFDA'
            reverse={true}
            reverseColor='#001a33'
            onPress={this.handleAddReminderPress}
          />
        </View>

      </List>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#001a33`,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor:`transparent`,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: null,
    height: null,
    borderRadius: 80,
    margin: 20
  },
}
