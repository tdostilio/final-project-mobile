import React from 'react';
import { View } from 'react-native';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../../util/LottiePlayer';
import Header from '../../util/Header';


class Contacts extends React.Component {
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
        <View style={{ flex: 1 }}>
            <Header navigate={navigate} />
             <View>
                <View>
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
  
  