import React from 'react';
import { Button, View, Text } from 'react-native';
import { Card, CardSection, Input, Spinner } from '../common';
import { ContactManager } from 'NativeModules';



class Groups extends React.Component {
    state = { email: '', password: '', error: '', loading: false };
    static navigationOptions = {
      title: 'Groups',
    };

    componentDidMount() {
        ContactManager.getContacts( (err, result) => {
            console.log('haaaay');
            debugger;
            console.log(result);
          },
          (err) => {
            console.log('booo');
            console.log(err);
          }
        );
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
        <Button
        title="Go to Welcome"
        onPress={() =>
            navigate('Welcome')
        }
        />
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
        <Card>
            <CardSection>
                <Input 
                    placeholder="Kevin..."
                    label='Name'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
            </CardSection>
            <CardSection>
                {/* <Input 
                    secureTextEntry
                    placeholder=" minimum six chars"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                /> */}
            </CardSection>
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
        </Card>
      </View>
      );
    }
  }

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
};
  
  export default Groups;
  
  