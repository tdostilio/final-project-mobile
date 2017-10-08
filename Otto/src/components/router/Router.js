import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'react-native-elements'

// Me Screen
import Me from '../screens/me/Me'
import Settings from '../screens/me/Settings'

// Feed Screen
import Feed from '../screens/Feed'
import UserDetail from '../screens/UserDetail'

// Contact Screen
import Contacts from '../screens/contacts/Contacts'

// Groups Screen
import Groups from '../screens/groups/Groups'


export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
})

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  }
})

export const GroupsStack = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      title: 'Groups',
    },
  }
})

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
})

export const Tabs = TabNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-box" size={30} color={tintColor} />
    },
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="import-contacts" size={34} color={tintColor} />
    }
  },
  Groups: {
    screen: GroupsStack,
      navigationOptions: {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ tintColor }) => <Icon name="group-work" size={30} color={tintColor} />
      }
  }
},
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
    activeBackgroundColor: '#1EBF9E',
    upperCaseLabel: true,
    activeTintColor: '#fff',
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
      backgroundColor: '#0E131A',
    },
  }
})

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
})
