import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <List >
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            onPress={() => this.props.navigation.navigate('Me')}
          />
        </List>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: `#222A43`
  }
}
