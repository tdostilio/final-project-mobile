import React from 'react';
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native';

class What extends React.Component {
    static navigationOptions = {
      title: 'What',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Button
            title="What May I Help You With?"
            onPress={() =>
                navigate('When')
            }
            />
          </View>
      )
    }
}

export default What;