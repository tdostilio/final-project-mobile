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

<<<<<<< HEAD:Otto/src/components/navigator/screens/contacts/ContactList.js
styles = {
<<<<<<< HEAD

=======
const styles = {
>>>>>>> feature1-james:Otto/src/components/screens/contacts/ContactList.js
=======
    scrollContainer: {
        backgroundColor: `#C5E4DB`
    },
>>>>>>> 7c39998e040e4fe97ba7e27536e872194b0d4ca8
    ContactStyle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: `#C5E4DB`
    }
}

export default ContactList;
