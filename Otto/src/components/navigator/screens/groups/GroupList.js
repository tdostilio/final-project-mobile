import { CardSection } from '../../../util/';
import React, { Component } from 'react';
import { View } from 'react-native';

class GroupList extends Component {
    renderContacts = (contacts) => {
        return contacts.map( (item, key) => {
            return <CardSection contact={item} key={key}/>
        })
    }
    render() {
        return (
            <View>
                {this.renderContacts(this.props.contacts)}
            </View>
        );
    }
}

export default GroupList;