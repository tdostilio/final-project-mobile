import React from 'react';
import { Button, View, Image } from 'react-native';
import { StartButton } from './StartButton';

class Welcome extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
            <View style={styles.navStyle}>
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
            <Image
            source={require('../images/mainlogo.png')}
            style={styles.logoStyle}
            />
            <Button
                style={styles.startStyle}
                title='Lets Get Started!'
                 onPress={() =>
                navigate('Who')
            }
            />
        </View>
      );
    }
  }

const styles = {
    logoStyle: {
    height: 200, 
    width: 200, 
    alignSelf: 'center', 
    justifyContent: 'center',
    marginTop: 75,
    marginBottom: 75
    },
    navStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    startStyle: {
        fontSize: 24
    }
}

export default Welcome;
  
  