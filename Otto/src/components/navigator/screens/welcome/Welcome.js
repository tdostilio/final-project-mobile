import React, { Component } from 'react';
import { Button, View, Image, Text, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import prettyFormat from 'pretty-format';

import logo from '../../../../static/images/mainlogo.png';
import Header from '../../util/Header';


export default class Welcome extends Component {

    state = {
        checked: false,
    }

    static defaultProps = {
        first_name: 'James',
        last_name: 'Hong'
    }

    render() {
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
                        title='Click Here'
                        checked={this.state.checked}
                        onPress={() => this.setState({
                            checked: !this.state.checked
                        })}
                    />
                    <Button
                        title={"Reminder"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                    <CheckBox
                        title='Click Here'
                        checked={this.state.checked}
                        onPress={() => this.setState({
                            checked: !this.state.checked
                        })}
                    />
                    <Button
                        title={"Text"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                    <CheckBox
                        title='Click Here'
                        checked={this.state.checked}
                        onPress={() => this.setState({
                            checked: !this.state.checked
                        })}
                    />
                    <Button
                        title={"Phone"}
                    />
                </View>
                <View style={styles.optionButtonStyle}>
                    <CheckBox
                        title='Click Here'
                        checked={this.state.checked}
                        onPress={() => this.setState({
                            checked: !this.state.checked
                        })}
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
