import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FrequencyButton from './FrequencyButton';

export default class Frequency extends Component {
    render() {
        return (
            <View>
                <Text>How frequently?</Text>
                <FrequencyButton>Daily</FrequencyButton>
                <FrequencyButton>Weekly</FrequencyButton>
                <FrequencyButton>Monthly</FrequencyButton>                
            </View>
        );
    }
}
