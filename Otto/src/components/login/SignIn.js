import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'
import t from 'tcomb-form-native';


const Form = t.form.Form;

const Login = t.struct({
  email: t.String,
  password: t.String,
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

export default class SignInForm extends Component {


  handleSubmit = () => {
    const value = this._form.getValue();
    if (!(value)) return null;

    // check if user is registered from server

  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={Login} 
          options={options}
        />
        <TouchableOpacity onPress={this.handleLogin} style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleCreate} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#222A43'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#eee',
    fontSize: 35,
    marginTop: 10
  },
  formStyle: {
    padding: 20
  },
  inputField: {
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#E2F7FA',
    marginBottom: 20,
    color: '#222A43'
  },
  buttonContainer: {
    backgroundColor: '#1EBF9E',
    paddingVertical: 15,
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#E2F7FA',
    fontWeight: '700'
  }
}
