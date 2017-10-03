import React from 'react';
import { Button, View } from 'react-native';

class Top5 extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <Button
        title="Go to Welcome"
        onPress={() =>
            navigate('Welcome')
        }
        />
        <Button
        title="Go to Home"
        onPress={() =>
        navigate('Home')
        }
        />
        <Button
        title="Go to Groups"
        onPress={() =>
            navigate('Groups')
        }
        />
      </View>
    );
  }
}

export default Top5;

