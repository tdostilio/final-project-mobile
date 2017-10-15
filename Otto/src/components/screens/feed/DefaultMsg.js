import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, ScrollView, Text, RefreshControl } from 'react-native'
import { List, Card, Icon, Button} from 'react-native-elements'
import uuid from 'uuid'


const styles = {
  container: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#001a33',
    borderRadius: 8,
    borderColor: '#001a33',
    overflow: 'hidden'
  },
  cardTitle: {
    color: `#fff`
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center'
  }
}

DefaultMsg.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired
}

export default function DefaultMsg ({refreshing, onRefresh}) {
  return (
    <FlatList
      data={[{}]}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={() => uuid.v4()}
      renderItem={({item}) => (
        <Card
          title={`Pull Down To Refresh`}
          titleStyle={styles.cardTitle}
          containerStyle={styles.container}>

            <View style={styles.buttonContainer}>
              <Icon
                raised={true}
                name='refresh'
                underlayColor='#001a33'
                type='material'
                color='#1E90FF'
                reverse={true}
                reverseColor='#fff'
              />
            </View>

            <View>
              <Text style={{color: 'white'}}>
                Add some contacts to a group!
              </Text>
            </View>

          </Card>
      )}
      />
  )
}
