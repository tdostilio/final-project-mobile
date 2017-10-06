import React, { Component } from 'react';
import { Button, View, Image, Text, ScrollView } from 'react-native';
import CheckBox from '../../../util/Checkbox';

import logo from '../../../../static/images/mainlogo.png';
import Header from '../../util/Header';


export default class Welcome extends Component {

    static defaultProps = {
        first_name: 'James',
        last_name: 'Hong'
    }

    render() {
      console.log(CheckBox);

      const { navigate } = this.props.navigation
      return (
        <ScrollView>
            <Header navigate={navigate}/>
            <Image
            source={logo}
            style={styles.logoStyle}
            />
            <View>
                <View style={styles.optionButtonStyle}>
                     <CheckBox
                    /> 
                    <Button
                        title={"Reminder"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                     <CheckBox
                    /> 
                    <Button
                        title={"Text"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                     <CheckBox
                    /> 
                    <Button
                        title={"Phone"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                     <CheckBox
                    /> 
                    <Button
                        title={"Venmo"}
                    />
                </View>
            </View>
            <View style={styles.optionButtonStyle}>
                <Button 
                    title={"One Time"}
                />
                <Button 
                    title={"Recurring"}
                />
            </View>
        </ScrollView>
      )
    }
  }

const styles = {
    buttonStyle: {
    },
    optionButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoStyle: {
    height: 200, 
    width: 200, 
    marginTop: 100,
    alignSelf: 'center', 
    justifyContent: 'center',
    }
}
