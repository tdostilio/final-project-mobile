import React from 'react';
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native';

class When extends React.Component {
    static navigationOptions = {
      title: 'When',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Button
            title="When Would You Like To Do This?"
            onPress={() =>
                navigate('Success')
            }
            />
          </View>
      )
    }
}

export default When;