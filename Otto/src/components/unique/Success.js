import React from 'react';
import { Button, View, Image, Text } from 'react-native';

class Success extends React.Component {
    static navigationOptions = {
      title: 'Success',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View>
            <Text style={styles.successText}>You did it!</Text>
            <Button
            title="Otto Something Else?"
            onPress={() =>
                navigate('Welcome')
            }
            />
          </View>
      )
    }
}

const styles = {
    successText: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Success;