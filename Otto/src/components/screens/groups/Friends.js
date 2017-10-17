import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'

import LottieGears from '../../util/LottieGears'
import heart from '../../../static/images/friend.png';
import config from '../../util/api/config'
import Subtitle from '../../util/Subtitle'


export default class Friends extends Component {

  state = {
    credentials: {},
    route: '',
    payload: [],
    payloadStatus: false
  }

  async componentWillMount() {

    try {
      const { credentials, route } = this.props.navigation.state.params
      await this.setState({credentials, route})
  
      const path = this.singularizeRoute(route)
      const id = credentials.id
      const token = credentials.token
      await this.setState({token, groupInfo: this.props.navigation.state.params})

      const result = await axios.get(config.GET_GROUP(path, id),
      {headers: {"Authorization": "jwt " + token}})
      console.log('received payload', result.data.result)
      await this.setState({payload: result.data.result, payloadStatus: true})

      } catch (error) {
        console.log(error);
      }
  }

  singularizeRoute = (route) => {
    let length = route.length
    if (route[length-1] === 's') {
      return route.slice(0, length-1)
    } else {
      return route
    }
  }

  renderContacts = (payload) => {
    return payload.map((x, idx) => {
      return (
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradientWrapper}
          key={idx}
        >
          <Button
            style={{marginTop: 10}}
            borderRadius={50}
            backgroundColor={`transparent`}
            title={`${x.first_name} ${x.last_name}`}
            color={'#1FFFDA'}
            fontWeight={'700'} 
          />

          <Icon
          raised={true}
          name='clear'
          onPress={this.handleReminderPress}
          underlayColor='#001a33'
          type='material'
          color='transparent'
          marginRight={0}
          size={25}
          reverse={true}
          reverseColor='tomato'
          onPress={this.handleAddReminderPress}
        />

        </LinearGradient>
      )
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const { payload, payloadStatus } = this.state

    if (!payloadStatus) return <View style={styles.container}><LottieGears /></View>

    return (
      
      <View style={styles.container}>

        <ScrollView>
          <View style={styles.centerLogo}>
            <Image
              style={styles.logo}
              source={heart}
            />
          </View>
          <Text
            style={styles.headerStyle}>
            Keep In Touch
          </Text>
          <Subtitle text='Monthly Reminders' />
          <View style={styles.buttonContainer}>
            {this.renderContacts(payload)}
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
    justifyContent: 'center'
  },
  headerStyle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Geeza Pro'
  },
  gradientWrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginTop: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  centerLogo: {
    alignItems: 'center',
    marginTop: 20
  },
}
