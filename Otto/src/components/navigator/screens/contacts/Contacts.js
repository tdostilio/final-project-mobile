import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
// import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../util/';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../../util/LottiePlayer';
import { Card, CardSection, Input, Spinner, NoStyleCard } from '../../../../components/util'
import Header from '../../util/Header'


class Contacts extends React.Component {
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
             <NoStyleCard style={styles.noStyling}>
            <View>
                {this.state.contacts ? <ContactList contacts={this.state.contacts}/>:null}
            </View>
               </NoStyleCard>
               <NoStyleCard style={styles.noStyling}>
                   <LottiePlayer />
                </NoStyleCard>
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
  
  export default Contacts;
  
  