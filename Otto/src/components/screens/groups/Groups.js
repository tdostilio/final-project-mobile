import React, { Component } from 'react'
import { AsyncStorage, View, Text, ScrollView, Image } from 'react-native'
import axios from 'axios'

import { Button } from 'react-native-elements'
import mainlogo from '../../../static/images/mainlogo.png'
import config from '../../util/api/config'


export default class Groups extends Component {

  state = {
    credentials: ''
  }

  static defaultProps = {
    template: [
      {
        title: "Family",
        subTitle: "Reminders scheduled every 5 to 7 days...",
        value: 80,
        icon: {name: 'favorite', type: 'material', color: 'lightcoral'},
        route: 'Family'
      },
      {
        title: "Close Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'mood', type: 'material', color: '#FFFF66'},
        route: 'CloseFriends'
      },
      {
        title: "Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'group', type: 'material', color: 'lightskyblue'},
        route: 'Friends'
      }
    ]
  }

  async componentDidMount() {
    
    try {
      const credentials = await AsyncStorage.getItem(config.USER_INFO)
      console.log(credentials)
      await this.setState({credentials: JSON.parse(credentials)})

      } catch (error) {
        console.log(error);
      }
  }

  handleSearch = (text) => {
    this.setState({
      search: text
    })
  }

  handleSubmit = (text) => {
    console.log('hi')
  }

  handlePress = (item) => {
    const { credentials } = this.state

    this.props.navigation.navigate(item.route, Object.assign({}, {credentials}, item))
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
          fontWeight='600'
          icon={item.icon}
          onPress={() => {this.handlePress(item)}}
          title={item.title}
          />
      )
    })
  )

  render() {
    const { loading, search } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image
          style={styles.logo}
          source={mainlogo}
          />
        </View>
        <Text style={styles.textStyle}>Your Groups</Text>
        <ScrollView>
          <View style={styles.buttonContainer}>
            {this.renderTemplates()}
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
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: `#001a33`,
    justifyContent: 'center',
  },
  centerLogo: {
      alignItems: 'center',
      marginTop: 20
  },
  logo: {
      width: 100,
      height: 100,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Geeza Pro'
  }
}
