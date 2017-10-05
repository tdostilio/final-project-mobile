import { ContactCard } from './ContactCard';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class ContactList extends Component {
    renderContacts = (contacts) => {
        return contacts.map( (item, key) => {
            return <ContactCard style={styles.ContactStyle} contact={item} key={key}/>
        })
    }
    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                {this.renderContacts(this.props.contacts)}
            </ScrollView>
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
