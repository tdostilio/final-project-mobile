import React, { Component } from 'react'
import { Button, View, Image, Text } from 'react-native'

import logo from '../../../../static/images/mainlogo.png'


export default class Welcome extends Component {

    static defaultProps = {
        first_name: 'James',
        last_name: 'Hong'
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        
    })

    render() {
      const { navigate } = this.props.navigation
      return (
        <View>
            <View style={styles.navBarContainer}>
                <Button
                title="Home"
                onPress={() =>
                    navigate('Home')
                }
                />
                <Button
                title="Top 5"
                onPress={() =>
                navigate('Top5')
                }
                />
                <Button
                title="Contacts"
                onPress={() =>
                    navigate('Groups')
                }
                />
                <Button
                title="Groups"
                onPress={() =>
                    navigate('Groups')
                }
                />
            </View>
        <Image
        source={logo}
        style={styles.logoStyle}
        />
        <Text>
            {this.props.first_name}
        </Text>
        </View>
      )
    }
  }

const styles = {
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

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
