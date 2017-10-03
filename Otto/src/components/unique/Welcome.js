import React from 'react';
import { Button } from 'react-native';

class Welcome extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Home"
          onPress={() =>
            navigate('Home', { name: 'Jane' })
          }
        />
      );
    }
  }
  
  export default Welcome;
  
  