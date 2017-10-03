import React from 'react';
import { Button, View } from 'react-native';

class Home extends React.Component {
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
        title="Go to Top 5"
        onPress={() =>
        navigate('Top5')
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

export default Home;

