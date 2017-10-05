import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
// import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../util/';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../../util/LottiePlayer';
import { Card, CardSection, Input, Spinner } from '../../../../components/util';
import Header from '../../util/Header';


class Contacts extends React.Component {
    state = { email: '', password: '', error: '', loading: false, contacts: null };
    static navigationOptions = {
      title: 'Contacts',
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
      console.log(this.state.contacts);
      const { navigate } = this.props.navigation;
      return (
        <View style={{ flex: 1 }}>
            <Header navigate={navigate}/>
             <View>
                <View>
                    {this.state.contacts
                    ? <ContactList contacts={this.state.contacts} style={styles.contactStyles}/>
                    :   <View style={styles.lottieStyle}>
                            <LottiePlayer />
                        </View>
                    }
                </View>
            </View>
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
    contactStyles: {
    },
    lottieStyle: {
        marginTop: 100
    }
};
  
  export default Contacts;
  
  