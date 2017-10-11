import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class GroupAdd extends Component {

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
        icon: {name: 'favorite', type: 'material'}
      },
      {
        title: "Close Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'face', type: 'material'}
      },
      {
        title: "Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'group', type: 'material'}
      }
    ]
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
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
          backgroundColor={`#5D8DAD`}
          icon={item.icon}
          onPress={this.callContact}
          title={item.title}
          />
      )
    })
  )

  render() {
    const { navigate } = this.props.navigation
    const { loading, search } = this.state

    return (
      <View style={styles.container}>
        <View>
            <Text>What group would you like [contact] to add to?</Text>
        </View>
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
  subtitle: {
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 100,
    backgroundColor: `#222A43`,
    justifyContent: 'center',
  },
}
