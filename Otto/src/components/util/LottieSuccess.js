import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

import anim from '../../../assets/lottie/success.json'

export default class LottieSuccess extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    const { groupName, person } = this.props
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>Successfully added {person.givenName} {person.familyName} to the Group: {groupName} </Text>
          <View style={styles.container}>
            <Animation
            ref={animation => {
                this.animation = animation
            }}
            style={{
                alignSelf: 'center',
                width: 200,
                height: 200,
                
            }}
            loop={false}
            source={anim}
            />
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001a33',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    shadowRadius: 0,
    shadowOffset: {width:0, height: 0}
  },
  textStyle: {
    color: '#5D8DAD',
    fontSize: 25,
    textAlign: 'center'
  }
})
