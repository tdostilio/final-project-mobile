import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { StartButton } from './StartButton';

class Who extends React.Component {
    static navigationOptions = {
      title: 'Who',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Text>Who Shall We Otto?</Text>
          </View>
      )
    }
}

export default Who;