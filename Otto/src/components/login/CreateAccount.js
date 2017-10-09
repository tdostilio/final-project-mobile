import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { onSignIn } from "../auth/Auth";

import SignUpForm from '../util/Form/SignUp'


export default class CreateAccount extends Component {
  
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: '#222A43', paddingVertical: 20 }}>
        <Card containerStyle={{backgroundColor: '#b6ccda'}}>
          <SignUpForm navigation={navigation}/>
        </Card>
       </View>
    );
  }
}
