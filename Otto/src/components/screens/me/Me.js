import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { Card, Header, Tile, List, ListItem, Button } from 'react-native-elements'

import { me } from '../../router/data'

export default class Me extends Component {

  static defaultProps = {
    ...me
  }

  handleCallPress = () => {
    this.props.navigation.navigate('RecentCall')
  }

  handleTextPress = () => {
    this.props.navigation.navigate('RecentText')
  }

  handleEmailPress = () => {
    this.props.navigation.navigate('RecentEmail')
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.avatarContainer}>
          <Tile
            imageSrc={{ uri: this.props.picture.large}}
            featured
          />
        </View>

        <View style={styles.contentContainer}>
         <Card
            containerStyle={
              {borderRadius: 15, borderColor: `#5D8DAD`, padding: 10, alignSelf: 'stretch',
              marginTop: 15, backgroundColor: `#5D8DAD`}}>
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'smartphone', type: 'material'}}
                title='Recent Calls'
                onPress={this.handleCallPress} />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'comment', type: 'font-awesome'}}
                onPress={this.handleTextPress}
                title='Recent Texts' />
              <Button
                borderRadius={50}
                raised
                large
                buttonStyle={{marginBottom: 5, backgroundColor: `#222A43`}}
                icon={{name: 'email', type: 'material'}}
                onPress={this.handleEmailPress}
                title='Recent Emails' />
         </Card>
        </View>

      </ScrollView>
    )
  }
}

const styles = {
  container: {
    backgroundColor: `#222A43`
  },
  avatarContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
}
