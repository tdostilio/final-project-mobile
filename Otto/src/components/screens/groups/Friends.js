import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import axios from 'axios'

import LottieGears from '../../util/LottieGears'
import heart from '../../../static/images/friend.png';
import config from '../../util/api/config'


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
        <View key={idx} style={styles.buttonStyle}>
          <Button
            borderRadius={50}
            backgroundColor={'#1E90FF'}
            title={`${x.first_name} ${x.last_name}`}
            color={'#1FFFDA'}
            fontWeight={'700'} 
          />
        </View>
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
  buttonStyle: {
    marginTop: 10, 
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
  }
}
