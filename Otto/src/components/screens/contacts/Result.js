import React, { Component } from 'react'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import timer from 'react-native-timer'
import LottieCheckSuccess from '../../util/LottieCheckSuccess'
import LottieFailure from '../../util/LottieFailure'


export default class Result extends Component {
  render() {
    const { person, result, backToPrevious } = this.props
    console.log(result)

    return (
      <View style={styles.container}>
        <View style={{flexGrow: 1}}>
          <ScrollView>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {result.AddedContact
                  ? <LottieCheckSuccess
                                  groupName={result.groupName}
                                  person={person} />
                  : <LottieFailure
                                  person={person}
                                  groupName={result.groupName}
                                  reason={result.reason} />
                }
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
              large
              buttonStyle={{ marginTop: 5 }}
              borderRadius={5}
              raised
              backgroundColor={`red`}
              icon={{name: 'backspace', type: 'material'}}
              onPress={backToPrevious}
              title='Back' />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: `#001a33`
  },
  buttonContainer: {
    flexGrow: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
