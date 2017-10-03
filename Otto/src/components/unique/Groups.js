import React from 'react';
import { Button, View } from 'react-native';

class Groups extends React.Component {
    static navigationOptions = {
      title: 'Groups',
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
        title="Go to Top 5"
        onPress={() =>
            navigate('Top5')
        }
        />
      </View>
      );
    }
  }
  
  export default Groups;
  
  