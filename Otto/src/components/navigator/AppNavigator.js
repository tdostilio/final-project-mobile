import React from 'react'
import { StackNavigator } from 'react-navigation'

import Welcome from './screens/welcome/Welcome'
import Home from './screens/home/Home'
import Top5 from './screens/top5/Top5'
import Contacts from './screens/contacts/Contacts'
import Groups from './screens/groups/Groups'


const AppNavigator = StackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Home: {
      screen: Home
    },
    Top5: {
      screen: Top5
    },
    Contacts: {
      screen: Contacts
    },
    Groups: {
      screen: Groups
    }
  }
)

export default AppNavigator
