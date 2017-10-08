import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { CardSection } from '../../../src/components/util/';


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
