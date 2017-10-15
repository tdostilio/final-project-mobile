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

  
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>

        <ScrollView>
          <View style={styles.centerLogo}>
            <Image
              style={styles.logo}
              source={bestFriend}
            />
          </View>
        <Text style={styles.headerStyle}>Best Friends</Text>
        <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                borderRadius={50}
                backgroundColor={'#1E90FF'}
                title={'Best Friend [name]'}
                color={'#1FFFDA'}
                fontWeight={'700'}  
              />
            </View>

            <View style={styles.buttonStyle}>
              <Button
                borderRadius={50}
                backgroundColor={'#1E90FF'}
                title={'Best Friend [name]'}
                color={'#1FFFDA'}
                fontWeight={'700'}  
              />
            </View>

            <View style={styles.buttonStyle}>
              <Button
                borderRadius={50}
                backgroundColor={'#1E90FF'}
                title={'Best Friend [name]'}
                color={'#1FFFDA'}
                fontWeight={'700'}  

              />
            </View>

              
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
