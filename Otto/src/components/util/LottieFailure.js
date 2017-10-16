import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

import anim from '../../../assets/lottie/fail.json'

export default class LottieSuccess extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    const { groupName, person, reason } = this.props
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{person.givenName} {person.familyName} has already been added to {groupName}.</Text>
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
            loop={true}
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
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 40
  }
})
