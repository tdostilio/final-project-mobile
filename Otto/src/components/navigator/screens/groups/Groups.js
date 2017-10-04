import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
// import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../util/';
import { ContactManager } from 'NativeModules';
import GroupList from './GroupList';
import LottiePlayer from '../../../util/LottiePlayer';
import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../../components/util'
import Header from '../../util/Header'


class Groups extends React.Component {
    state = { email: '', password: '', error: '', loading: false, contacts: [] };
    static navigationOptions = {
      title: 'Groups',
    };



    componentWillMount() {
        return (
            ContactManager.getContacts( (err, result) => {
                this.setState({contacts: result}, () => {
                    // AsyncStorage.setItem(result, 'Legend').then(console.log('did it'));
                    console.log('State set');
                });
            },
            (err) => {
                console.log(err);
            }
            )
        );
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
            <Header navigate={navigate}/>
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Enter a name..."
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
      )
    }
  }

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    noStyling: {
        marginTop: 200
    }
};
  
  export default Groups;
  
  