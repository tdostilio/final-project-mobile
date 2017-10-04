import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './screens/home/Home'
import Welcome from './screens/welcome/Welcome'
import Top5 from './screens/top5/Top5'
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
    Groups: {
      screen: Groups
    }
  }
)

export default AppNavigator
