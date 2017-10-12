import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


const ContactCard = (props) => {
    wrapText = (info) => {
        return <Text style={styles.textStyle}>{info}</Text>
    }
    return (
        <TouchableOpacity 
            onPress={() => props.navigation.navigate('ContactOptions', props.contact )}
        >
            <View style={styles.containerStyle}>
            {
                props.contact ? 
                wrapText(props.contact.givenName.toString()+ " " +props.contact.familyName.toString())
                :wrapText('No Contacts Found')
            }
            <Icon name="plus" size={26} style={styles.chevronStyle} />
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        // borderTopWidth: 0.5,
        borderBottomWidth: 0.1,
        padding: 10,
        backgroundColor: '#001a33',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#5D8DAD',
        height: 60
    },
    textStyle: {
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold'
    },
    chevronStyle: {
        justifyContent: 'center',
        color: "#1FFFDA" 
    }

};


// Communications code for calling:


export { ContactCard };
