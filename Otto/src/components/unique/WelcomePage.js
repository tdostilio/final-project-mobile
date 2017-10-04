import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Button, NavigatorIOSApp, Card, CardSection, Input, Spinner, LogoImage } from '../common';
import { StartButton } from '../unique';
// import LottiePlayer from './LottiePlayer';

class WelcomePage extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <View style={styles.player}>
                    {/* <LottiePlayer /> */}
                </View>
                <StartButton>
                    Get Started!
                </StartButton>
            </View>
        );
    }
}

const styles = {
    imageContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    player: {
        height: 1
    }
};

export default WelcomePage;