import React from 'react'
import { TabNavigator } from 'react-navigation'

import Me from '../screens/me/Me'
import Contacts from '../screens/contacts/Contacts'
import Groups from '../screens/groups/Groups'
import Settings from '../screens/settings/Settings'

const styles = {
  meLogo: {
      width: 26,
      height: 26
  }
}


const Router = TabNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
      }

    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarLabel: 'Contacts',
        
      }
    },
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarLabel: 'Groups',
        
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        
      }
    }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,

    tabBarOptions: {
      showIcon: true,
      indicatorStyle: {
        borderBottomColor: 'green'
      },
      upperCaseLabel: true,
      activeTintColor: '#C5E4DB',
      inactiveTintColor: '#fff',
      pressColor: 'red',
      labelStyle: {
        fontSize: 14,
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
