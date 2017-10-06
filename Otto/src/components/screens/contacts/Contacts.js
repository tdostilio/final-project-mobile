import React from 'react';
import { View } from 'react-native';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../util/LottiePlayer';
import { SearchBar } from 'react-native-elements';


class Contacts extends React.Component {
    static navigationOptions = {
      title: 'Contacts',
    };

    state = {   
        loading: false, 
        contacts: null,
        search: '' 
    };

    handleSearch = (text) => {
        this.setState({search: text})
        console.log(this.state.search);
    }
    
    handleSubmit = (text) => {
        console.log('hi')
    }

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
      const { loading, search } = this.state;

      return (
        <View style={{ flex: 1 }}>
            <View>
                <SearchBar
                    round
                    onChangeText={this.handleSearch}
                    value={search}
                    placeholder='Search ...' 
                />
            </View>
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
    contactStyles: {
    },
    lottieStyle: {
        marginTop: 100
    }
};
  
  export default Contacts;
  
  