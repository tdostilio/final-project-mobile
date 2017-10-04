import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { StartButton } from './StartButton';

class When extends React.Component {
    static navigationOptions = {
      title: 'When',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Text>When Would You Like To Do This?</Text>
          </View>
      )
    }
}

export default When;