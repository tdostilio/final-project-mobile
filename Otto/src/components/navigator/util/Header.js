import React from 'react'
import { Button, View, Image, Text } from 'react-native'


const Header = (props) => {

  return (
    <View style={styles.navBarContainer}>
      <Button
      title="Home"
      onPress={() =>
          props.navigate('Home')
      }
      />
      <Button
      title="Top 5"
      onPress={() =>
      props.navigate('Top5')
      }
      />
      <Button
      title="Contacts"
      onPress={() =>
          props.navigate('Groups')
      }
      />
      <Button
      title="Groups"
      onPress={() =>
          props.navigate('Groups')
      }
      />
    </View>
  )
}

export default Header

const styles = {
  navBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
}
