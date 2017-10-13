import React, { Component } from 'react';
import { ContactCard } from './ContactCard';
import { ScrollView, View } from 'react-native';

class ContactList extends Component {
    renderContacts = (contacts, credentials) => {
        return contacts.map( (item, key) => {
            return <ContactCard 
                        navigation={this.props.navigation} 
                        style={styles.ContactStyle} 
                        credentials={this.props.credentials} 
                        contact={item} 
                        key={key}
                    />
        })
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView style={styles.scrollContainer}>
                    {this.renderContacts(this.props.contacts)}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    ContactStyle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: `#C5E4DB`
    }
}

export default ContactList;
