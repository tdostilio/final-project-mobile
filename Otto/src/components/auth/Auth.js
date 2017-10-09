import { AsyncStorage } from "react-native";

import config from '../util/api/config'

export const onSignIn = () => AsyncStorage.setItem(config.USER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(config.USER_KEY);

export const isSignedIn = () => {
  
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(config.USER_KEY)
      .then(res => {
        console.log(res)
        if (res !== null) {
          console.log('res is true')
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)});
  });
};
