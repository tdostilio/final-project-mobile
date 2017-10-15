import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import bestFriend from '../../../static/images/bestfriend.png';


export default class CloseFriends extends Component {
  state = {

  }

  async componentWillMount() {

    try {
      const { credentials, route } = this.props.navigation.state.params
      await this.setState({credentials, route})
  
      const path = route.replace(/\s/g, "");
      const id = credentials.id
      const token = credentials.token
      await this.setState({token, groupInfo: this.props.navigation.state.params})

      const result = await axios.get(config.GET_GROUP(path, id),
      {headers: {"Authorization": "jwt " + token}})
      console.log(result.data.result)

      } catch (error) {
        console.log(error);
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

    if (!payloadStatus) return <LottiePlayer />

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
    backgroundColor: `#001a33`
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
    width: 130,
    height: 130,
  },
  centerLogo: {
    alignItems: 'center',
    marginTop: 20
  }
}
