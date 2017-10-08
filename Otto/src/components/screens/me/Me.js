import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { Tile, List, ListItem, Button } from 'react-native-elements'

import { me } from '../../router/data'

export default class Me extends Component {

  static defaultProps = {
    ...me
  }

  handleTextPress = () => {

  }

  handleEmailPress = () => {

  }

  handlerReminders = () => {

  }

  handlePhonePress = () => {

  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`\n\n\n\n\n\n\n\nWelcome \n ${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
        />

        

        <View style={styles.contentContainer}>
        
          <Button
          title="Phone Calls"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handlePhonePress}
          large
          raised
          borderRadius={5}
          backgroundColor={`#3C5474`}
          icon={{name: 'smartphone', type: 'material'}}
          containerViewStyle={{alignSelf: 'stretch'}}
         />
        
          <Button
          title="Text Messages"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handlePhonePress}
          large
          raised
          borderRadius={5}
          backgroundColor={`#3C5474`}
          icon={{name: 'comment', type: 'font-awesome'}}
          containerViewStyle={{alignSelf: 'stretch'}}
         />
        
          <Button
          title="Emails"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handlePhonePress}
          large
          raised
          borderRadius={5}
          backgroundColor={`#3C5474`}
          icon={{name: 'email', type: 'material'}}
          containerViewStyle={{alignSelf: 'stretch'}}
         />

         <Button
         title="Reminders"
         buttonStyle={{ marginTop: 20, marginBottom: 20 }}
         onPress={this.handlePhonePress}
         large
         raised
         borderRadius={5}
         backgroundColor={`#3C5474`}
         icon={{name: 'envira', type: 'font-awesome'}}
         containerViewStyle={{alignSelf: 'stretch'}}
        />
        
        </View>

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
          raised
          borderRadius={5}
          backgroundColor={`#3C5474`}
        />

      </ScrollView>
    )
  }
}

const styles = {
  container: {
    backgroundColor: `#222A43`
  },
  contentContainer: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
}
