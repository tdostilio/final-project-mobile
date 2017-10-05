import { CardSection } from '../../../util/';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

class GroupList extends Component {
    renderContacts = (contacts) => {
        return contacts.map( (item, key) => {
            return <TouchableOpacity>
                        <CardSection contact={item} key={key} style={{justifyContent: 'center'}}/>
                    </TouchableOpacity> 
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