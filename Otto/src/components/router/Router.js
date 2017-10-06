import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Me from '../screens/me/Me'
import Contacts from '../screens/contacts/Contacts'
import Groups from '../screens/groups/Groups'
import Settings from '../screens/settings/Settings'


const Router = TabNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../../static/images/me.png')}
              style={{width: 25, height: 25, tintColor: 'white'}}>
            </Image>
        )
      }

    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../static/images/contacts.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}>
          </Image>
      )
        
      }
    },
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../static/images/group.png')}
            style={{width: 40, height: 40, tintColor: 'white'}}>
          </Image>
      )
        
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../static/images/settings.png')}
            style={{width: 35, height: 35, tintColor: 'white'}}>
          </Image>
      )
        
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,

    tabBarOptions: {
      showIcon: true,
      indicatorStyle: {
        borderBottomColor: 'green'
      },
      activeBackgroundColor: '#2980b9',
      upperCaseLabel: true,
      activeTintColor: '#C5E4DB',
      inactiveTintColor: '#fff',
      pressColor: 'red',
      labelStyle: {
        fontSize: 14,
        padding: 0
      },
      indicatorStyle: {
        color: 'red'
      },
      tabStyle: {
        width: 200,    
      },
      style: {
        backgroundColor: '#156497',
      },
    }
  }
)

export default Router
