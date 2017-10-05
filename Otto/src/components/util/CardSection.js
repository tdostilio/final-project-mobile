import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    wrapText = (info) => {
        return <Text>{info}</Text>
    }
    return (
        <View style={styles.containerStyle}>
            {props.children}  
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

