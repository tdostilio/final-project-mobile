import React, { Component } from 'react';
import { View } from 'react-native';
import Frequency from '../../../routes/frequency/Frequency';
import Header from '../../util/Header';


export default class Home extends Component {

    static navigationOptions = {
      title: 'Home',
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header navigate={navigate} />
        <Frequency />
      </View>
    );
  }
}
