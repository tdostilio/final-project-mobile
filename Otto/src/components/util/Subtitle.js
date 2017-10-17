import React from 'react';
import { View, Text } from 'react-native';

const Subtitle = (props) => {
    <Text style={styles.subtitle}>
        {props}
    </Text>
}


const styles = {
    subtitle: {
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        fontSize: 15,
        fontWeight: '200',
        fontFamily: 'Geeza Pro'
      }
}

export { Subtitle };




