import React, { Component } from 'react'
import {AsyncStorage, StyleSheet, Text, View, Button } from 'react-native'
import t from 'tcomb-form-native'

import config from '../util/api/config'


const Form = t.form.Form

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
      error: 'Enter an email',
      autoCapitalize: 'none'
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
    duplicateEmail: false
  }

  saveItem = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  userSignup = (user) => {
    fetch(config.CREATE_ACCOUNT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        rememberMe: user.rememberMe
      })
    })
    .catch(error => {
      console.log(error)
    })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.error) {
        this.setState({duplicateEmail: true})
        return;
      } else {
        console.log(responseData)
        
        // uncomment when ready to save to AsyncStorage
        this.saveItem(config.USER_TOKEN, responseData.token)
        
        // send token payload to route state params
        this.props.navigation.navigate('SignedIn', responseData)
      }
    })
    .done();
  }

  handleSubmit = () => {
    const user = this._form.getValue();
    if (!(user)) return null;


    if (this.checkPassword(user)) {
     let tokenSuccess =  this.userSignup(user)
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
        {this.state.duplicateEmail ? <Text style={styles.warning}> Email already registered </Text> : null}
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    )
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
})
