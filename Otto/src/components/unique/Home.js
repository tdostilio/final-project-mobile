import React from 'react';
import { Button } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Welcome"
        onPress={() =>
          navigate('Welcome', { name: 'Jane' })
        }
      />
    );
  }
}

export default Home;

