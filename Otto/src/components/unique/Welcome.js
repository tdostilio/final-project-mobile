import React from 'react';
import { Button, View } from 'react-native';

class Welcome extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
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
  
  export default Welcome;
  
  