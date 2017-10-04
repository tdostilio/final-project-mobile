import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

import anim from '../../../assets/lottie/preloader.json';

export default class LottiePlayer extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
    //   <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.container}>Importing Contacts...</Text>
            <View style={styles.container}>
                <Animation
                ref={animation => {
                    this.animation = animation;
                }}
                style={{
                    alignSelf: 'center',
                    width: 200,
                    height: 200,
                    
                }}
                loop={true}
                source={anim}
                />
                </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    shadowRadius: 0,
    shadowOffset: {width:0, height: 0}
  }
});