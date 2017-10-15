import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, RefreshControl } from 'react-native'
import { Icon } from 'react-native-elements'


const styles = {
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8
  },
  buttonContainer: {
    width: null,
    height: null,
    borderRadius: 80,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

DefaultMsg.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired
}

export default function DefaultMsg ({refreshing, onRefresh}) {
  return (
    <View
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.container}>
      <View>
        <Text style={{color: 'white'}}>
          Pull Down To Refresh
        </Text>
      </View>
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
    </View>
  )
}
