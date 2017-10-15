import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { List, ListItem, Icon, Button} from 'react-native-elements'


export default class ReminderOptions extends Component {
  state = {

  }

  componentDidMount() {
  
  }

  renderCard = (payload) => {
    return payload.map((x, idx) => {
      return (
        <View style={styles.container} key={idx}>

          <View style={styles.optionsContainer}>
            <Text
              style={{ color: "white", fontSize: 16 }}>
              Have you spoke to &nbsp;
              <Text
                style={{color: '#1FFFDA', fontWeight: 'bold', fontSize: 14}}>
                 {x.first_name} {x.last_name
              }</Text> recently?
            </Text>
          </View>

          <View style={styles.optionsButtonContainer}>
            <Button
            borderRadius={75}
            raised
            medium
            buttonStyle={{marginBottom: 5, backgroundColor: `green`}}
            title='Yes'
            color='white'
            onPress={this.handleYesPress} 
            />
            <Button
            borderRadius={75}
            raised
            medium
            buttonStyle={{marginBottom: 5, backgroundColor: `red`}}
            title='No'
            color='white'
            onPress={this.handleNoPress} 
            />
            <Button
            borderRadius={75}
            raised
            medium
            buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
            icon={{name: 'phone', type: 'material', color: 'white'}}
            title='Call'
            color='white'
            onPress={this.handleCallPress} 
            />
            <Button
            borderRadius={75}
            raised
            medium
            buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
            icon={{name: 'smartphone', type: 'material', color: 'white'}}
            title='Text'
            color='white'
            onPress={this.handleTextPress} 
            />
          </View>

        </View>
      )
    })
  }
  
  render() {
    const { payload, credentials } = this.props
    return (
      <View style={styles.optionsGroupContainer}>
        {this.renderCard(payload)}
      </View>
    )
  }
}



const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: 'dodgerblue',
    borderRadius: 8
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  optionsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  optionsGroupContainer: {
    backgroundColor: `#001a33`,
    elevation: 2,
    margin: 5
  }
}
