// Import libraries
import React from 'react';
import { Text, View } from 'react-native';


// Make component
const Logo = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontFamily: 'AvenirNext-Italic',
        color: 'white',  
        fontSize: 40
    }
};

// Export component
export { Logo };
