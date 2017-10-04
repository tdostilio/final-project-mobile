import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

import { Card, CardSection, Input, Spinner } from '../../../../components/util'
import Header from '../../util/Header'


export default class Contacts extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    static navigationOptions = {
      title: 'Contacts',
    }

    render() {
      const { navigate } = this.props.navigation
      return (
        <View>
            <Header />
            <Card>
                <CardSection>
                    <Input 
                        placeholder="Enter a name bitch..."
                        label='Name'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
            </Card>
            <Card>
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
