import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


const ContactCard = (props) => {
    console.log('these are the props: ' + props)
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
            <Icon name="angle-right" size={24} style={styles.chevronStyle} />
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        padding: 10,
        backgroundColor: '#222A43',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
    },
    textStyle: {
        fontSize: 20,
        color: '#5D8DAD'
    },
    chevronStyle: {
        justifyContent: 'center',
        color: "#C8C7CC" 
    }

};


// Communications code for calling:


export { ContactCard };
