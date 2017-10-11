import React, { Component } from 'react';
import { Picker, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class AddReminder extends Component {
  state = {
    name: '',
    date: '',
    group: 'friends',
    task: '',
    isDateTimePickerVisible: false,
    datePicked: false
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  backToHome = () => {
    this.props.navigation.goBack(null)
  }

  addReminder = () => {
    // capture state with all complete values

    // maybe do some validation logic to make sure all fields are filled

    // make fetch api call to server
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

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
    date = date.toString()
    this.setState({
      date,
      datePicked: true
    })

  };
  
  render() {
    const { navigate } = this.props.navigation
    const {name, date, group, task, datePicked } = this.state
    return (
      <View style={styles.container}>

        <View style={{flexGrow: 1}}>
          <ScrollView>

            <FormLabel>Name</FormLabel>
            <FormInput value={name}
                      onChangeText={this.handleNameChange}/>

            <FormLabel>Date</FormLabel>
            { datePicked ? <FormInput value={date} /> :  
              <View>
                <Button
                  borderRadius={10}
                  backgroundColor={`#5D8DAD`}
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
              </View>
            }

            <FormLabel>Group</FormLabel>
            <Picker selectedValue={this.state.group}
                    style={styles.picker}
                    itemStyle={{color: 'white'}}
                    onValueChange={(itemValue, itemIndex) => this.setState({group: itemValue})}>
                    <Picker.Item label="Family" value="family" />
                    <Picker.Item label="Close Friends" value="close_friends" />
                    <Picker.Item label="Friends" value="friends" />
                    <Picker.Item label="Co-Workers" value="co_workers" />
                    {/* <Picker.Item label="Clients" value="clients" /> */}
            </Picker>

            <FormLabel>Task</FormLabel>
            <FormInput value={task}
                      onChangeText={this.handleTaskChange}/>

          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            large
            buttonStyle={{ marginTop: 20, marginBottom: 20 }}
            borderRadius={5}
            raised
            backgroundColor={`#5D8DAD`}
            icon={{name: 'check', type: 'material'}}
            onPress={this.addReminder}
            title='Remind Me' />
          <Button
            large
            buttonStyle={{ marginTop: 20, marginBottom: 20 }}
            borderRadius={5}
            raised
            backgroundColor={`#5D8DAD`}
            icon={{name: 'backspace', type: 'material'}}
            onPress={this.backToHome}
            title='Back to Feed' />
        </View>

      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`
  },
  buttonContainer: {
    flexGrow: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}
