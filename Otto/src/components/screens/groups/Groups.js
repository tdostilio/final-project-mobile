import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import mainlogo from '../../../static/images/mainlogo.png';


export default class Groups extends Component {

  state = {
    loading: true,
    search: ''
  }

  static defaultProps = {
    template: [
      {
        title: "Family",
        subTitle: "Reminders scheduled every 5 to 7 days...",
        value: 80,
        icon: {name: 'favorite', type: 'material'},
        route: 'Family'
      },
      {
        title: "Close Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'face', type: 'material'},
        route: 'CloseFriends'
      },
      {
        title: "Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'group', type: 'material'},
        route: 'Friends'
      }
    ]
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  handleSearch = (text) => {
    this.setState({
      search: text
    })
  }

  handleSubmit = (text) => {
    console.log('hi')
  }

  handlePress = (item) => {
    
    this.props.navigation.navigate(item.route)
  }

  renderTemplates = () => (
    this.props.template.map((item, index) => {
      return (
          <Button
          key={index}
          large
          buttonStyle={{ marginTop: 20, marginBottom: 20 }}
          borderRadius={5}
          raised
          backgroundColor={`#1E90FF`}
          icon={item.icon}
          onPress={() => {this.handlePress(item)}}
          title={item.title}
          />
      )
    })
  )

  render() {
    const { loading, search } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image
          style={styles.logo}
          source={mainlogo}
          />
        </View>
        <Text style={styles.textStyle}>Your Groups</Text>
        <ScrollView>
          <View style={styles.buttonContainer}>
            {this.renderTemplates()}
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: `#222A43`,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: `#222A43`,
    justifyContent: 'center',
  },
  centerLogo: {
      alignItems: 'center',
      marginTop: 20
  },
  logo: {
      width: 100,
      height: 100,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600'
  }
}
