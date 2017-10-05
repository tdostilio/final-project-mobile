import React, { Component } from 'react'
import { Button, View, Image, Text } from 'react-native'

import logo from '../../../../static/images/mainlogo.png'
import Header from '../../util/Header'


export default class Welcome extends Component {

    static defaultProps = {
        first_name: 'James',
        last_name: 'Hong'
    }

    render() {
      const { navigate } = this.props.navigation
      return (
        <View>
            <Header navigate={navigate}/>
            <Image
            source={logo}
            style={styles.logoStyle}
            />
        </View>
      )
    }
  }

const styles = {
    buttonStyle: {
    },

    logoStyle: {
    height: 200, 
    width: 200, 
    marginTop: 100,
    alignSelf: 'center', 
    justifyContent: 'center',
    }
}
