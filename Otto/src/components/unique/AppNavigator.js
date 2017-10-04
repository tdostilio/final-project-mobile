import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Welcome from './Welcome';
import Top5 from './Top5';
import Groups from './Groups';
import Who from './Who';
import What from './What';
import When from './When';
import Success from './Success';

  
  const AppNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    Top5: { screen: Top5 },
    Groups: { screen: Groups },
    Who: { screen: Who },
    What: { screen: What },
    When: { screen: When },
    Success: { screen: Success }
  });

  export default AppNavigator;