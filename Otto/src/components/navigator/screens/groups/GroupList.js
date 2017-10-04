import { CardSection } from '../../../util/';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class GroupList extends Component {
    renderContacts = (contacts) => {
        return contacts.map( (item, key) => {
            return <CardSection contact={item} key={key}/>
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

export default GroupList;