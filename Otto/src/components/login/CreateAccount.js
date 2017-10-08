import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth/Auth";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#222A43', paddingVertical: 20 }}>
    <Card containerStyle={{backgroundColor: '#b6ccda'}}>
      <FormLabel labelStyle={{color: '#222A43'}}>Email</FormLabel>
      <FormInput inputStyle={{color: '#222A43'}} placeholder="Email address..." />
      <FormLabel labelStyle={{color: '#222A43'}}>Password</FormLabel>
      <FormInput inputStyle={{color: '#222A43'}} secureTextEntry placeholder="Password..." />
      <FormLabel labelStyle={{color: '#222A43'}}>Confirm Password</FormLabel>
      <FormInput inputStyle={{color: '#222A43'}} secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Sign Up"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  </View>
);
