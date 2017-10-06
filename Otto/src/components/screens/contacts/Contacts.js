import React from 'react';
<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/Contacts.js
import { View } from 'react-native';
=======
import { Button, View, Text, AsyncStorage } from 'react-native';
>>>>>>> master:Otto/src/components/screens/contacts/Contacts.js
import { ContactManager } from 'NativeModules';

import ContactList from './ContactList';
<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/Contacts.js
import LottiePlayer from '../../../util/LottiePlayer';
import Header from '../../util/Header';


class Contacts extends React.Component {
=======
import LottiePlayer from '../../util/LottiePlayer';
import { Card, CardSection, Input, Spinner } from '../../../components/util';


export default class Contacts extends React.Component {
    state = { email: '', password: '', error: '', loading: false, contacts: null };
>>>>>>> master:Otto/src/components/screens/contacts/Contacts.js
    static navigationOptions = {
      title: 'Contacts',
    };
    state = { email: '', password: '', error: '', loading: false, contacts: null };

    componentWillMount() {
        return (
            ContactManager.getContacts((err, result) => {
                result.sort((a, b) => {
                    if (a.familyName > b.familyName) {
                        return 1;
                    } else if (a.familyName < b.familyName) {
                        return -1;
                    } if (a.givenName > b.givenName) {
                        return 1;
                    } else if (a.givenName < b.givenName) {
                        return -1;
                    }
                    return 0;
                });
                this.setState({ contacts: result }, () => {
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
<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/Contacts.js
        <View style={{ flex: 1 }}>
            <Header navigate={navigate} />
=======
        <View style={styles.container}>
>>>>>>> master:Otto/src/components/screens/contacts/Contacts.js
             <View>
                <View style={styles.contactContainer}>
                    {this.state.contacts
                    ? <ContactList contacts={this.state.contacts} style={styles.contactStyles}/>
                    :<View style={styles.lottieStyle}>
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
    container: {
        flex: 1,
        backgroundColor: `#C5E4DB`
    },
    contactContainer: {
        backgroundColor: `#C5E4DB`
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        backgroundColor: `#C5E4DB`
    },
    contactStyles: {
        alignItems: 'center',
        backgroundColor: `#C5E4DB`
    },
    lottieStyle: {
        marginTop: 100,
        backgroundColor: `#C5E4DB`
    }
};
  
