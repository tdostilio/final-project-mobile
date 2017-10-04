import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import { Card, CardSection, Input, Spinner, LottiePlayer } from '../../../util/';
import { ContactManager } from 'NativeModules';
import GroupList from './GroupList';


class Groups extends React.Component {
    state = { email: '', password: '', error: '', loading: false, contacts: [] };
    static navigationOptions = {
      title: 'Groups',
    };



    componentWillMount() {
        return (
            LottiePlayer
        )
        // ContactManager.getContacts( (err, result) => {
        //     this.setState({contacts: result}, () => {
        //         // AsyncStorage.setItem(result, 'Legend').then(console.log('did it'));
        //         console.log('State set');
        //     });
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );
    }
    componentDidMount() {
    //  <LottiePlayer />
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
            {/* <CardSection>
                <Input 
                    placeholder="Kevin..."
                    label='Name'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
            </CardSection> */}
        </Card>
        <Card>
            <View>
                {this.state.contacts ? <GroupList contacts={this.state.contacts}/>:null}
            </View>
        </Card>
        <Card>
            <LottiePlayer />
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
  
  