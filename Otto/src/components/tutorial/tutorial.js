import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

import { Card, CardSection, Input, Spinner } from '../../../../components/util'


export default class Tutorial extends Component {

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
            <Button
            title="Go to Welcome"
            onPress={() =>
                navigate('Welcome')
            }
            />
            <Button
            title="Go to Home"
            onPress={() =>
            navigate('Home')
            }
            />
            <Button
            title="Go to Top 5"
            onPress={() =>
                navigate('Top5')
            }
            />
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
