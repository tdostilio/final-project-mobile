import React from 'react';
import { View } from 'react-native';


const NoStyleCard = (props) => {
    return (
        <View>
            {props.children}
        </View>
    );
};

export { NoStyleCard };