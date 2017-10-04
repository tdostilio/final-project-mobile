import React from 'react';
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native';

class Who extends React.Component {
    static navigationOptions = {
      title: 'Who',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Button
            title="Who Shall We Otto?"
            onPress={() =>
                navigate('What')
            }
            />
          </View>
      )
    }
}

export default Who;