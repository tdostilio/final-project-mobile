import React, { Component } from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { List, ListItem, SearchBar } from 'react-native-elements'

import LottiePlayer from '../../util/LottiePlayer'


export default class Groups extends Component {

  state = {
    loading: true,
    search: ''
  }

  static defaultProps = {
    template: [
      {
        title: "Custom",
        subTitle: "Add a custom group..."
      },
      {
        title: "Family",
        subTitle: "Keep in touch...",
        value: 80
      },
      {
        title: "Friends",
        subTitle: "Keep in touch",
        value: 123
      },
      {
        title: "Co-Workers",
        subTitle: "Strengthen allied relationships",
        value: 50
      },
      {
        title: "Clients",
        subTitle: "Stay top-of-mind with current clients",
        value: 40
      }
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
            subtitle={item.subtitle}
            chevronColor='#2980b9'
            badge={{ value: 1, textStyle: { color: '#fff' }, containerStyle: {marginRight: -10} }}
          />
      )
    })
  )

  render() {
    const { navigate } = this.props.navigation
    const { loading, search } = this.state

    if (!loading) {
      return (
        <LottiePlayer />
      )
    }

    return (
      <View style={styles.container}>
        <View onSubmit={this.handleSubmit}>
          <SearchBar
            round
            onChangeText={this.handleSearch}
            value={search}
            placeholder='Find a group...' />
        </View>
        <View><Text>TestSearch: {search}</Text></View>
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
    backgroundColor: `#C5E4DB`
  }
}
