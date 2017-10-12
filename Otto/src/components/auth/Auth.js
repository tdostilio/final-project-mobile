import { AsyncStorage } from "react-native";

import config from '../util/api/config'

export const onSignOut = () => AsyncStorage.removeItem(config.USER_INFO);

export const isSignedIn = () => {
  
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(config.USER_INFO)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        reject(err)});
  });
};
