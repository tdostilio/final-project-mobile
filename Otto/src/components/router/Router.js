import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'react-native-elements'

// Login Screen
import Login from '../login/Login'
import CreateAccount from '../login/CreateAccount'

// Me Screen
import Me from '../screens/me/Me'
import RecentCall from '../screens/me/RecentCall'
import RecentText from '../screens/me/RecentText'
import RecentEmail from '../screens/me/RecentEmail'

// Feed Screen
import Feed from '../screens/feed/Feed'
import AddReminder from '../screens/feed/AddReminder'

// Contacts2 Screen
import Contacts2 from '../screens/contacts2/Contacts2'
import Contacts2Detail from '../screens/contacts2/Contacts2Detail'

// Contact Screen
import Contacts from '../screens/contacts/Contacts'
import ContactOptions from '../screens/contacts/ContactOptions'

// Groups Screen
import Groups from '../screens/groups/Groups'

// Settings Screen
// import Settings from '../screens/settings/Settings'


export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Welcome',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#eee'
    },
  }
})

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#eee'
    },
  }
})

export const Contacts2Stack = StackNavigator({
  Contacts2: {
    screen: Contacts2,
    navigationOptions: {
      title: 'Contacts2',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    },
  },
  Contacts2Detail: {
    screen: Contacts2Detail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }),
  },
})

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    },
  }
})

export const GroupsStack = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      title: 'Groups',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    },
  }
})

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//       headerStyle: {
//         backgroundColor: `#222A43`
//       },
//       headerTintColor: '#fff'
//     },
//   },
// })

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="import-contacts" size={34} color={tintColor} />
    }
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={30} color={tintColor} />
    },
  },
  Groups: {
    screen: GroupsStack,
      navigationOptions: {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ tintColor }) => <Icon name="group-work" size={30} color={tintColor} />
      }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-box" size={30} color={tintColor} />
    },
  },
  // Settings: {
  //   screen: SettingsStack,
  //   navigationOptions: {
  //     tabBarLabel: 'Settings',
  //     tabBarIcon: ({ tintColor }) => <Icon name="account-box" size={30} color={tintColor} />
  //   },
  // },
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
    activeBackgroundColor: '#5D8DAD',
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

// isolated stacks / rely on its own redirect to go back
export const RecentCallStack = StackNavigator({
  RecentCall: {
    screen: RecentCall,
    navigationOptions: {
      title: 'Recent Calls',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const RecentTextStack = StackNavigator({
  RecentText: {
    screen: RecentText,
    navigationOptions: {
      title: 'Recent Texts',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const RecentEmailStack = StackNavigator({
  RecentEmail: {
    screen: RecentEmail,
    navigationOptions: {
      title: 'Recent Email',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const AddReminderStack = StackNavigator({
  AddReminder: {
    screen: AddReminder,
    navigationOptions: {
      title: 'Add A Reminder',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const ContactOptionsStack = StackNavigator({
  ContactOptions: {
    screen: ContactOptions,
    navigationOptions: {
      title: 'Contact Options',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Sign in',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      title: 'Create Account',
      headerStyle: {
        backgroundColor: `#222A43`
      },
      headerTintColor: '#fff'
    }
  }
})

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
  {
  SignedIn: {
    screen: Tabs,
  },
  SignedOut: {
    screen: LoginStack
  },
  RecentCall: {
    screen: RecentCallStack,
  },
  RecentText: {
    screen: RecentTextStack,
  },
  RecentEmail: {
    screen: RecentEmailStack,
  },
  AddReminder: {
    screen: AddReminderStack,
  },
  ContactOptions: {
    screen: ContactOptionsStack,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: signedIn ? "SignedIn" : "SignedOut",
  tabStyle: {flex: 1}
})
}
