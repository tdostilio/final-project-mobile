import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {
                props.contact ? 
                <Text>{props.contact.givenName.toString()+ " " +props.contact.familyName.toString()}</Text>
                :<Text>hello</Text>
            }
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        
    }
};

export { CardSection };

