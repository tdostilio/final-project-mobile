import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome';


const ContactCard = (props) => {
    wrapText = (info) => {
        return <Text style={styles.textStyle}>{info}</Text>
    }
    return (
        <TouchableOpacity 
            onPress={() => Communications.phonecall(props.contact.phoneNumbers[0]['number'], true)}

        >
            <View style={styles.containerStyle}>
            {
                props.contact ? 
                wrapText(props.contact.givenName.toString()+ " " +props.contact.familyName.toString())
                :wrapText('No Contacts Found')
            }
            <Icon name="angle-right" style={styles.chevronStyle} />
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    testStyle: {
        alignItems: 'space-between'
    },
    containerStyle: {
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#222A43',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
    },
    textStyle: {
        fontSize: 20,
        color: '#5D8DAD'
    },
    chevronStyle: {
        justifyContent: 'center',
        marginLeft: 200,
        size: 24,
        color: "#C8C7CC" 
    }

};


// Communications code for calling:
// onPress={() => Communications.phonecall(props.contact.phoneNumbers[0]['number'], true)}

export { ContactCard };
