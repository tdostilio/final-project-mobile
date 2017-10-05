import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ContactCard = (props) => {
    wrapText = (info) => {
        return <Text style={styles.textStyle}>{info}</Text>
    }
    return (
        <TouchableOpacity onPress={() => {console.log(props.contact)}}>
            <View style={styles.containerStyle}>
            {
                props.contact ? 
                wrapText(props.contact.givenName.toString()+ " " +props.contact.familyName.toString())
                :wrapText('No Contacts Found')
            }
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
    },
    textStyle: {
        fontSize: 20,
        color: '#6495ed'
    }
};

export { ContactCard };