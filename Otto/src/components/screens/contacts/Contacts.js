import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
// import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../util/';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../util/LottiePlayer';
import { Card, CardSection, Input, Spinner } from '../../../components/util';


export default class Contacts extends React.Component {
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
<<<<<<< HEAD
<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/Contacts.js
        <View style={{ flex: 1 }}>
            <Header navigate={navigate}/>
=======
        <View style={styles.container}>
>>>>>>> feature1-james:Otto/src/components/screens/contacts/Contacts.js
=======
        <View style={styles.container}>
>>>>>>> 7c39998e040e4fe97ba7e27536e872194b0d4ca8
             <View>
                <View style={styles.contactContainer}>
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
<<<<<<< HEAD
<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/Contacts.js
=======
        alignItems: 'center',
        backgroundColor: `#C5E4DB`
>>>>>>> feature1-james:Otto/src/components/screens/contacts/Contacts.js
=======
        alignItems: 'center',
        backgroundColor: `#C5E4DB`
>>>>>>> 7c39998e040e4fe97ba7e27536e872194b0d4ca8
    },
    lottieStyle: {
        marginTop: 100,
        backgroundColor: `#C5E4DB`
    }
};
  