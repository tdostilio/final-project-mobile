import { CardSection } from '../../../util/';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class ContactList extends Component {
    renderContacts = (contacts) => {
        return contacts.map( (item, key) => {
            return <CardSection style={styles.ContactStyle} contact={item} key={key}/>
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderContacts(this.props.contacts)}
            </ScrollView>
        );
    }
}

styles = {
    ContactStyle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    }
}

export default ContactList;