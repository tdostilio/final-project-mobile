import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, ScrollView, Text, RefreshControl } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { List, Card, Icon, Button} from 'react-native-elements'
import uuid from 'uuid'

import DefaultMsg from './DefaultMsg'


export default class ReminderOptions extends Component {

  static propTypes = {
    handleYesClick: PropTypes.func.isRequired,
    handleNoClick: PropTypes.func.isRequired,
    handleCallPress: PropTypes.func.isRequired,
    handleTextPress: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    refreshing: PropTypes.bool.isRequired
    // payload: will be boolean (false) or array of objs
  }

  removeNullValues = (payload) => payload.filter(x => x != null)
  
  render() {
    const { payload, handleYesClick, handleNoClick,
    onRefresh, refreshing, handleCallPress, handleTextPress
    } = this.props

    // if user doesn't have any contacts added to any group
    if (payload === false) {
      return (
          <DefaultMsg
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
      )
    }

    // remove null values
    const modifiedPayload = this.removeNullValues(payload)

    return (
        <FlatList
          data={modifiedPayload}
          refreshing={refreshing}
          onRefresh={onRefresh}
          keyExtractor={() => uuid.v4()}
          renderItem={({item}) => (
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.gradientWrapper}
            >
              <Card
                titleStyle={styles.cardTitle}
                containerStyle={styles.cardContainer}
                title={`${item.first_name} ${item.last_name}`}>
                <View style={styles.cardContent}>
                  <Text
                    style={{ color: "white", fontSize: 14 }}>
                    Have you spoke to &nbsp;
                    <Text
                      style={{color: '#1FFFDA', fontWeight: 'bold', fontSize: 14}}>
                      {item.first_name} {item.last_name
                    }</Text> recently?
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                  borderRadius={75}
                  raised
                  medium
                  buttonStyle={{marginBottom: 5, backgroundColor: `green`}}
                  title='Yes'
                  color='white'
                  onPress={handleYesClick} 
                  />
                  <Button
                  borderRadius={75}
                  raised
                  medium
                  buttonStyle={{marginBottom: 5, backgroundColor: `red`}}
                  title='No'
                  color='white'
                  onPress={handleNoClick} 
                  />
                  <Button
                  borderRadius={75}
                  raised
                  medium
                  buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                  icon={{name: 'phone', type: 'material', color: 'white'}}
                  title='Call'
                  color='white'
                  onPress={handleCallPress} 
                  />
                  <Button
                  borderRadius={75}
                  raised
                  medium
                  buttonStyle={{marginBottom: 5, backgroundColor: `#001a33`}}
                  icon={{name: 'smartphone', type: 'material', color: 'white'}}
                  title='Text'
                  color='white'
                  onPress={handleTextPress} 
                  />
                </View>
              </Card>
            </LinearGradient>
          )}
        />
    )
  }
}


const styles = {
  cardContainer: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: `transparent`,
    borderWidth: 0

  },
  cardTitle: {
    color: `#fff`,
    fontSize: 14,
    margin: 0
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5
  },
  defaultMsgContainer: {
    backgroundColor: `#001a33`,
    elevation: 2,
    margin: 5
  },
  gradientWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  }
}
