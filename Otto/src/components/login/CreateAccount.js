import React from "react"
import { View } from "react-native"
import { Card } from "react-native-elements"
import { onSignIn } from "../auth/Auth"

import SignUpForm from './SignUp'


const CreateAccount = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#222A43', paddingVertical: 20 }}>
    <Card containerStyle={{backgroundColor: '#b6ccda'}}>
      <SignUpForm navigation={navigation}/>
    </Card>
  </View>
)

export default CreateAccount
