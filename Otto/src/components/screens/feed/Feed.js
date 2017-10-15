import React, { Component } from 'react'
import { AsyncStorage, View, ScrollView, Text } from 'react-native'
import { List, ListItem, Icon, Button} from 'react-native-elements'
import axios from 'axios'

import LottieGears from '../../util/LottieGears'
import ReminderOptions from './ReminderOptions'
import config from '../../util/api/config'


export default class Feed extends Component {
  state = {
    credentials: '',
    payload: [],
    payloadStatus: false
  }

  async componentDidMount() {
    try {
      const credentials = await AsyncStorage.getItem(config.USER_INFO)
      console.log(credentials)
      await this.setState({credentials: JSON.parse(credentials)})

      const id = this.state.credentials.id
      const token = this.state.credentials.token
      const result = await axios.get(config.GET_GROUP(config.FEED, id),
      {headers: {"Authorization": "jwt " + token}})
      console.log('received payload', result.data.payload)
      await this.setState({payload: result.data.payload, payloadStatus: true})

      } catch (error) {
        console.log(error)
      }
  }

  singularizeRoute = (route) => {
    let length = route.length
    if (route[length-1] === 's') {
      return route.slice(0, length-2)
    } else {
      return route
    }
  }


  handleAddReminderPress = () => {
    this.props.navigation.navigate('AddReminder')
  }
  
  render() {
    const { navigate } = this.props.navigation
    const { credentials, payload, payloadStatus } = this.state
    if (!payloadStatus) return <View style={styles.container}><LottieGears /></View>

    return (
      <View style={styles.container}>

        <ScrollView>
          <ReminderOptions
                          payload={payload}
                          credentials={credentials}/>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Icon
            raised={true}
            name='add-circle'
            onPress={this.handleReminderPress}
            underlayColor='#001a33'
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
    backgroundColor: `#001a33`,
    flexDirection: 'column'
  },
  buttonContainer: {
    backgroundColor:`#001a33`,
    flexDirection: 'row-reverse',
    margin: 20
  },
}
