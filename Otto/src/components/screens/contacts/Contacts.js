import React from 'react';
import { View, ScrollView } from 'react-native';
import { ContactManager } from 'NativeModules';
import ContactList from './ContactList';
import LottiePlayer from '../../util/LottiePlayer';
import { List, ListItem, SearchBar } from 'react-native-elements';


class Contacts extends React.Component {
    

    state = {   
        loading: false, 
        contacts: null,
        searching: null,
        search: '' 
    };

    sortArray = (array, text) => {
        return array.filter( (person) => {
            return person.givenName.search(text) !== -1;
        });
    }

    handleSearch = (text) => {
        
        this.setState({search: text}, () => {
            if (this.state.search.length === 0) {
                this.setState({searching: null})
            }
            this.setState({searching: this.sortArray(this.state.contacts, this.state.search)})
        })
    }

    activityMonitor = () => {
        if (this.state.search === '') {
            return false;
        } else {
            return true;
        }
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
        <View style={{ flex: 1, backgroundColor: '#222A43' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.state.contacts
                    ? 
                    <View>
                        <SearchBar
                            round
                            inputStyle={{color: '#1EBF9E', backgroundColor: 'white', height: 50, justifyContent: 'center', fontSize: 20}}
                            containerStyle={{backgroundColor: '#222A43'}}
                            noIcon
                            onChangeText={this.handleSearch}
                            value={this.state.search}
                            placeholder='Search ...'
                        />
                        <ScrollView>
                        <ContactList contacts={this.state.searching 
                                                ? this.state.searching
                                                : this.state.contacts} 
                                        style={styles.contactStyles}
                                        navigation={this.props.navigation}
                                        />
                        </ScrollView>
                    </View>    
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
        flex: 1
    },
    lottieStyle: {
        marginTop: 100
    }
};
  
  export default Contacts;
  
  