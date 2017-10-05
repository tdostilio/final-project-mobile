import React, { Component } from 'react';
import { Button } from 'react-native';
import { FrequencyButton } from './FrequencyButton';

class Frequency extends Component {
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

export default Frequency;