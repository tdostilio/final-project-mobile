// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Animation from 'lottie-react-native';

// import anim from '../../assets/preloader.json';

// export default class LottiePlayer extends Component {
//   componentDidMount() {
//     this.animation.play();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>The ultimate personal relationship manager</Text>
//         <View>
//           <Animation
//             ref={animation => {
//               this.animation = animation;
//             }}
//             style={{
//               width: 200,
//               height: 200
//             }}
//             loop={true}
//             source={anim}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#A6207E',
//     marginTop: 10,
//     height: 100
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginLeft: 1,
//     marginRight: 1,
//     color: '#ffffff',
//     padding: 10
//   }
// });