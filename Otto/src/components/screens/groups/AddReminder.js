import React, { Component } from 'react'
import { Picker, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { ButtonGroup, List, ListItem, Button, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from 'react-native-modal-datetime-picker'
import axios from 'axios'

import LottieCheckSuccess from '../../util/LottieCheckSuccess'


export default class AddReminder extends Component {
  state = {
    name: '',
    date: '',
    group: 'family',
    event: 'Call',
    task: '',
    eventIndex: 0,
    isDateTimePickerVisible: false,
    datePicked: false,
    reminderSent: false,
    validationError: false
  }

  static defaultProps = {
    buttons: [
      'Call', 'Text'
    ]
  }

  backToHome = () => {
    this.props.navigation.goBack(null)
  }

  validateForm = (reminder) => {
    if (reminder.name === '') {
      return false;
    }
    else if (reminder.date === '') {
      return false;
    }
    else if (reminder.task === '') {
      return false;
    } else {
      return true;
    }

  }

  addReminder = () => {
    // capture state with all complete values
    const reminderInfo = this.state
    const reminderCloned = Object.assign({}, reminderInfo)

    // maybe do some validation logic to make sure all fields are filled
    if (!this.validateForm(reminderCloned)){
      this.setState({
        name: '',
        date: '',
        group: 'family',
        event: 'Call',
        task: '',
        eventIndex: 0,
        isDateTimePickerVisible: false,
        datePicked: false,
        reminderSent: false,
        validationError: true
      })
    }

    // make fetch api call to server
    console.log('addReminderClicked')

    this.setState({reminderSent: true})
  }

  handleNameChange = (text) => {
    this.setState({name: text})
  }
  
  handleDateChange = (text) => {
    this.setState({date: text})
  }

  handleGroupChange = (text) => {
    this.setState({group: text})
  }

  
  handleTaskChange = (text) => {
    this.setState({task: text})
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
  
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
    date = date.toString()
    this.setState({
      date,
      datePicked: true
    })

  };

  updateEventIndex = (eventIndex) => {
    const event = this.props.buttons[eventIndex]
    this.setState({
      eventIndex,
      event
    })
  }
  
  render() {
    const { buttons } = this.props
    const { name, date, group, task, datePicked,
    reminderSent, eventIndex, validationError } = this.state
    console.log(this.state)

    if (reminderSent && (!validationError)) {
      return (
        <View style={styles.container}>
          <LottieCheckSuccess />
          <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.gradientWrapper}
          >
            <Button
              buttonStyle={{ marginTop: 20, marginBottom: 20 }}
              borderRadius={5}
              raised
              backgroundColor={`transparent`}
              icon={{name: 'backspace', type: 'material'}}
              onPress={this.backToHome}
              title='Back to Feed' />
          </LinearGradient>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>

        <View style={{flexGrow: 1}}>
          <ScrollView>
            { validationError
              ?
              <View style={styles.validationMsg}>
                <Text style={{color: 'red'}}>
                Please fill out rest of the fields.
                </Text>
              </View>
              : null
            }

            <FormLabel>Name</FormLabel>
            <FormInput value={name}
                       onChangeText={this.handleNameChange}/>

            <FormLabel>Date</FormLabel>
            { datePicked ? <FormInput value={date} /> :  
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.gradientWrapper}
              >
                <Button
                  borderRadius={10}
                  backgroundColor={`transparent`}
                  raised
                  onPress={this._showDateTimePicker}
                  icon={{name: 'calendar', type: 'font-awesome'}}
                  title='Choose a date...' />
                <DateTimePicker
                  mode={'datetime'}
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
              </LinearGradient>
            }

            <FormLabel>Event</FormLabel>
            <Picker selectedValue={this.state.group}
                    style={styles.picker}
                    itemStyle={{color: 'white', height: 85}}
                    onValueChange={(itemValue, itemIndex) => this.setState({group: itemValue})}>
                    <Picker.Item label="Close Friends" value="close_friends" />
                    <Picker.Item label="Family" value="family" />
                    <Picker.Item label="Friends" value="friends" />
                    {/* <Picker.Item label="Co-Workers" value="co_workers" /> */}
                    {/* <Picker.Item label="Clients" value="clients" /> */}
            </Picker>

            <FormLabel>Group</FormLabel>
              <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.gradientWrapper}
                >
              <ButtonGroup
                      selectedBackgroundColor={`transparent`}
                      textStyle={{color: '#001a33'}}
                      innerBorderStyle={{color: '#001a33'}}
                      selectedTextStyle={{color: '#ffffff'}}
                      containerStyle={styles.buttonGroup}
                      onPress={this.updateEventIndex}
                      selectedIndex={eventIndex}
                      buttons={buttons} >
              </ButtonGroup>
            </LinearGradient>

            <FormLabel>Task</FormLabel>
            <FormInput value={task}
                      onChangeText={this.handleTaskChange}/>

          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.gradientWrapper}
          >
            <Button
              buttonStyle={{ marginTop: 20, marginBottom: 20 }}
              borderRadius={5}
              raised
              backgroundColor={`transparent`}
              icon={{name: 'backspace', type: 'material'}}
              onPress={this.backToHome}
              title='Back to Feed' />
          </LinearGradient>
          <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.gradientWrapper}
          >
            <Button
              buttonStyle={{ marginTop: 20, marginBottom: 20 }}
              borderRadius={5}
              raised
              backgroundColor={`transparent`}
              icon={{name: 'check', type: 'material'}}
              onPress={this.addReminder}
              title='Remind Me' />
          </LinearGradient>
        </View>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#001a33`
  },
  buttonContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  gradientWrapper: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 8
  },
  buttonGroup: {
    height: 50,
    borderWidth: 0,
    backgroundColor: `transparent`
  },
  validationMsg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
