import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Welcome from './Welcome';
import Top5 from './Top5';
import Groups from './Groups';

  
  const AppNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    Top5: { screen: Top5 },
    Groups: { screen: Groups}
  });

  export default AppNavigator;