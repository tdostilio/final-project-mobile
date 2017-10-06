import React from 'react'
import { Image } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import Me from '../screens/me/Me'
import Contacts from '../screens/contacts/Contacts'
import Groups from '../screens/groups/Groups'
import Settings from '../screens/settings/Settings'


// Stack
const MeStack = StackNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: {
        title: 'Me',
      }
    }
  }
)

const ContactsStack = StackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
      }
    }
  }
)

const GroupsStack = StackNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: {
        title: 'Groups',
      }
    }
  }
)

const SettingsStack = StackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
      }
    }
  }
)


// Tabs
const Router = TabNavigator(
  {
    Me: {
      screen: MeStack,
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
      screen: ContactsStack,
      navigationOptions: {
        tabBarOnPress: (scene, jumpToIndex) => {
          console.log('onPress:', scene.route);
          jumpToIndex(scene.index)
        },
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
      screen: GroupsStack,
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
      screen: SettingsStack,
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
  // ui for entire tab bar
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
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
        padding: 0,
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
);

export default Router
