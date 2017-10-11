import React, { Component } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        icon: {name: 'home', type: 'material'}
      },
      {
        title: "Close Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 123,
        icon: {name: 'home', type: 'material'}
      },
      {
        title: "Friends",
        subTitle: "Reminders scheduled every 10 to 14 days...",
        value: 50,
        icon: {name: 'home', type: 'material'}
      },
      // {
      //   title: "Clients",
      //   subTitle: "Stay top-of-mind with current clients",
      //   value: 40
      // }
    ]
  }

  componentDidMount() {
    // make ajax call to hydrate this state.. do it here or from `Me Component` and pass down as props
    // change loading to false once state hydrated.. for development-- leave it true
  }

  handleSearch = (text) => {
    this.setState({search: text})
  }

  handleSubmit = (text) => {
    console.log('hi')
  }

  renderTemplates = () => (
    this.props.template.map((item, index) => {
      return (
          <ListItem
            key={index}
            title={item.title}
            titleStyle={{color: '#eee'}}
            leftIcon={{name: 'home', type: 'material'}}
            subtitle={
              <View>
                <Text style={styles.subtitle}>{item.subTitle}</Text>
              </View>
              }
            chevronColor='#5D8DAD'
            badge={{ value: 1, containerStyle: { backgroundColor: '#1EBF9E'}, textStyle: { color: '#fff' }, containerStyle: {marginRight: -10} }}
          />
      )
    })
  )

  render() {
    const { navigate } = this.props.navigation
    const { loading, search } = this.state

    return (
      <View style={styles.container}>
        <View onSubmit={this.handleSubmit}>
          <SearchBar
            round
            inputStyle={{color: '#1EBF9E', backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'black'}}
            onChangeText={this.handleSearch}
            value={this.state.search}
            placeholder='Find a group...'
           />
        </View>
        {/* <View><Text>TestSearch: {search}</Text></View> */}
        <ScrollView>
          <View>
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
    backgroundColor: `#222A43`
  },
  subtitle: {
    color: 'white'
  }
}
