import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import bestFriend from '../../../static/images/bestfriend.png';


export default class CloseFriends extends Component {
  state = {

  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
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
      width: 100,
      height: 100,
  },
  centerLogo: {
    alignItems: 'center',
    marginTop: 20
  }
}
