import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'

import LottieGears from '../../util/LottieGears'
import heart from '../../../static/images/heart.png';
import config from '../../util/api/config'


export default class Family extends Component {

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
      return route.slice(0, length-2)
    } else {
      return route
    }
  }

  compareAndRemove = (payload, user) => {
    payload = payload.filter(x => x.phone_number != user.phone_number)
    this.setState({payload})
  }

  handleRemoveContactPress = (user) => {
    let payload = [...this.state.payload]
    this.compareAndRemove(payload, user)
  }

  handleAddReminderPress = (user) => {
    this.props.navigation.navigate('AddReminder', user)
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
            borderRadius={50}
            style={{marginTop: 10}}
            backgroundColor={`transparent`}
            title={`${x.first_name} ${x.last_name}`}
            color={'#1FFFDA'}
            fontWeight={'700'} 
          />

          <Icon
              raised={true}
              name='check'
              size={25}
              onPress={() => this.handleAddReminderPress(x)}
              underlayColor='#001a33'
              type='material'
              color='transparent'
              reverse={true}
              reverseColor='tomato'
            />
            <Icon
              raised={true}
              name='clear'
              size={25}
              onPress={() => this.handleRemoveContactPress(x)}
              underlayColor='#001a33'
              type='material'
              color='transparent'
              reverse={true}
              reverseColor='tomato'
            />

        </LinearGradient>
      )
    })
  }


  render() {
    const { navigate } = this.props.navigation
    const { payload, payloadStatus } = this.state

    if (!payloadStatus) return <View style={styles.container}><LottieGears /></View>
    console.log(this.props)
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
            Those Who Matter Most
          </Text>
        
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
    marginTop: 15
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
