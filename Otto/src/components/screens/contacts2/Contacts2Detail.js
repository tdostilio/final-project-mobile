import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Tile, List, ListItem, Icon } from 'react-native-elements'


export default class Contacts2Detail extends Component {

  handlePhonePress = () => {

  }

  handleTextPress = () => {

  }

  handlePayPress = () => {

  }

  handleEmailPress = () => {

  }

  render() {
    const { picture, name, email, phone, login, dob, location }
    = this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
        />

        <List style={styles.infoContainer}>
          <ListItem
            title="Email"
            titleStyle={{color: '#1EBF9E'}}
            rightTitle={email}
            rightTitleStyle={{color: '#5D8DAD'}}
            hideChevron
          />
          <ListItem
            title="Phone"
            titleStyle={{color: '#1EBF9E'}}
            rightTitle={phone}
            rightTitleStyle={{color: '#5D8DAD'}}
            hideChevron
          />
          <ListItem
            title="Birthday"
            titleStyle={{color: '#1EBF9E'}}
            rightTitle={dob}
            rightTitleStyle={{color: '#5D8DAD'}}
            hideChevron
          />
          <ListItem
            title="City"
            titleStyle={{color: '#1EBF9E'}}
            rightTitle={location.city}
            rightTitleStyle={{color: '#5D8DAD'}}
            hideChevron
          />
        </List>

        <List containerStyle={{marginTop: 10, marginBottom: 10, borderTopWidth: 0, backgroundColor: '#222A43'}}>
          <View style={styles.connectionIconsContainer}>
          <Icon
              raised={true}
              name='call'
              onPress={this.handlePhonePress}
              underlayColor='#001a33'
              type='material'
              color='#5D8DAD'
              reverse={true}
              reverseColor='#fff'
              onPress={this.handleAddReminderPress} />
            <Icon
              raised={true}
              name='textsms'
              onPress={this.handleTextPress}
              underlayColor='#001a33'
              type='material'
              color='#5D8DAD'
              reverse={true}
              reverseColor='#fff'
              onPress={this.handleAddReminderPress} />
              <Icon
              raised={true}
              name='email'
              onPress={this.handleEmailPress}
              underlayColor='#001a33'
              type='material'
              color='#5D8DAD'
              reverse={true}
              reverseColor='#fff'
              onPress={this.handleAddReminderPress} />
              <Icon
              raised={true}
              name='envira'
              onPress={this.handleEmailPress}
              underlayColor='#001a33'
              type='font-awesome'
              color='#5D8DAD'
              reverse={true}
              reverseColor='#fff'
              onPress={this.handleAddReminderPress} />
            <Icon
            raised={true}
            name='payment'
            onPress={this.handlePayPress}
            underlayColor='#001a33'
            type='material'
            color='#5D8DAD'
            reverse={true}
            reverseColor='#fff'
            onPress={this.handleAddReminderPress} />
          </View>
        </List>
      </ScrollView>
    )
  }
}


const styles = {
  container: {
    backgroundColor: `#222A43`
  },
  infoContainer: {
    backgroundColor: `#222A43`
  },
  connectionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
