import React, { Component } from 'react'
import {AsyncStorage, Alert, StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'
import t from 'tcomb-form-native';


const Form = t.form.Form;

const User = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  password: t.String,
  confirmPassword: t.String,
  rememberMe: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: '#222A43',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  auto: 'placeholders',
  fields: {
    firstName: {
      autoCorrect: false,
      error: 'Enter a first name'
    },
    lastName: {
      autoCorrect: false,
      error: 'Enter a last name'
    },
    email: {
      keyboardType: 'email-address',
      autoCorrect: false,
      error: 'Enter an email'
    },
    password: {
      password: true,
      secureTextEntry: true,
      autoCorrect: false,
      error: 'Enter a password'
    },
    confirmPassword: {
      password: true,
      autoCorrect: false,
      secureTextEntry: true,
      placeHolder: 'Confirm Password'
    },
    rememberMe: {
      placeHolder: 'Remember Me'
    }
  },
  stylesheet: formStyles,
};

export default class SignUpForm extends Component {

  state = {
    passwordError: false,
    authorizationError: false
  }

  saveItem = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  userSignup = (user) => {
    console.log(user)
    console.log(user.firstName)
    console.log(user.password)
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.firstName,
        password: user.password
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.saveItem('id_token', responseData.id_token),
      Alert.alert( 'Signup Success!', 'Click the button to get a Chuck Norris quote!')
    })
    .done();
  }

  handleSubmit = () => {
    const user = this._form.getValue();
    if (!(user)) return null;


    if (this.checkPassword(user)) {
      this.userSignup(user)

      // once value(token) comes back from server and authorized.. call saveItem


      // if the value come back fails... render authorization error

      // once access is verified take user to signedIn screen
      this.props.navigation.navigate('SignedIn')
    } else {
      this.setState({passwordError: true})
    }
  }

  checkPassword = (user) => {
    if ( (user.password) === (user.confirmPassword) ) {
      return true
    } else {
      return false
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        {this.state.passwordError ? <Text style={styles.warning}> Correct passwords required </Text> : null}
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  warning: {
    color: 'red'
  }
});
