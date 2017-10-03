import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Welcome from './Welcome';

  
  const AppNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
  });

  export default AppNavigator;