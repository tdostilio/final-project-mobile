import React from 'react';
import { View, Text } from 'react-native';

const ContactCard = (props) => {
    wrapText = (info) => {
        return <Text>{info}</Text>
    }
    return (
        <View style={styles.containerStyle}>
            {
                props.contact ? 
                wrapText(props.contact.givenName.toString()+ " " +props.contact.familyName.toString())
                :wrapText('No Contacts Found')
            }
        </View>
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
        
    }
};

export { ContactCard };