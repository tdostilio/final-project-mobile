import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

import { Card, CardSection, Input, Spinner } from '../../../../components/util'
import Header from '../../util/Header'



export default class Groups extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    static navigationOptions = {
      title: 'Groups',
    }

    render() {
      const { navigate } = this.props.navigation
      return (
        <View>
            <Header navigate={navigate}/>
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Enter a name..."
                        label='Name'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    {/* <Input 
                        secureTextEntry
                        placeholder=" minimum six chars"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    /> */}
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
            </Card>
        </View>
      )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
