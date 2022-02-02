import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import SafariView from 'react-native-safari-view';

//https://github.com/naoufal/react-native-safari-view#usage
export const SafariViewPoc = () => {
  const _onPress = () => {
    SafariView.isAvailable()
      .then(
        SafariView.show({
          url: 'https://careers.microsoft.com/us/en',
        }),
      )
      .catch((error) => {
        // Fallback WebView code for iOS 8 and earlier
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Show Safari View</Text>
      <Button title="react-native-safari-view" onPress={_onPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
    // borderColor: 'orange',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
