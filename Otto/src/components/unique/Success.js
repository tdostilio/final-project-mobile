import React from 'react';
import { Button, View, Image, Text } from 'react-native';

class Success extends React.Component {
    static navigationOptions = {
      title: 'Success',
    };
    render() {
      const { navigate } = this.props.navigation;
      return ( 
          <View style={styles.mainStyle}>
            <Text style={styles.successText}>You did it!</Text>
            <Image
            style={styles.imageStyle}
            source={require('../images/check.gif')}
            />
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
        fontSize: 24,
        color: '#007aff',
        marginBottom: 20,
    },
    imageStyle: {
        marginBottom: 20
    },
    mainStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Success;