import React from 'react';
import { ActivityIndicator, ListView, Button, Text, View, Image } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          source={{uri: 'https://vignette2.wikia.nocookie.net/ghostbusters/images/1/11/Bill_Murray.jpeg/revision/latest?cb=20081013140955'}}
          style={{height: 500, width: 500, borderWidth: 1, borderColor: 'red' }}
        />
        <Button
        title="Go to Welcome"
        onPress={() =>
            navigate('Welcome')
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
    )
  }
};

export default Home;

