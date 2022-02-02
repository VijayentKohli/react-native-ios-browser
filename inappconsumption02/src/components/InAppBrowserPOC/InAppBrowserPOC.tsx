// import React from 'react';
// import {View, Button, Text, Alert, StyleSheet} from 'react-native';
// import {InAppBrowser} from 'react-native-inappbrowser-reborn';

// // https://github.com/proyecto26/react-native-inappbrowser
// export const InAppBrowserPOC = () => {
//   const url = 'https://careers.microsoft.com/us/en';

//   const _onPress = async () => {
//     if (await InAppBrowser.isAvailable()) {
//       const result = await InAppBrowser.open(url, {
//         // iOS Properties
//         dismissButtonStyle: 'cancel',
//         preferredBarTintColor: '#453AA4',
//         preferredControlTintColor: 'white',
//         readerMode: false,
//         animated: true,
//         modalPresentationStyle: 'fullScreen',
//         modalTransitionStyle: 'coverVertical',
//         modalEnabled: true,
//         enableBarCollapsing: false,
//         // Android Properties
//         showTitle: true,
//         toolbarColor: '#6200EE',
//         secondaryToolbarColor: 'black',
//         navigationBarColor: 'black',
//         navigationBarDividerColor: 'white',
//         enableUrlBarHiding: true,
//         enableDefaultShare: true,
//         forceCloseOnRedirection: false,
//         // Specify full animation resource identifier(package:anim/name)
//         // or only resource name(in case of animation bundled with app).
//         animations: {
//           startEnter: 'slide_in_right',
//           startExit: 'slide_out_left',
//           endEnter: 'slide_in_left',
//           endExit: 'slide_out_right',
//         },
//         headers: {
//           'my-custom-header': 'my custom header value',
//         },
//       });
//       Alert.alert(JSON.stringify(result));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Show InAppBrowser Reborn</Text>
//       <Button
//         title="react-native-inappbrowser-reboarn"
//         onPress={_onPress}></Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 8,
//     // borderColor: 'orange',
//     // borderWidth: 1,
//     // borderStyle: 'solid',
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
// });
