import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { StartButton } from './StartButton';

class What extends React.Component {
    static navigationOptions = {
      title: 'What',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Text>What May I Help You With?</Text>
          </View>
      )
    }
}

export default What;