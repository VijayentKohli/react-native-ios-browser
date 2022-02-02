/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Home} from './src/components/home/Home';
import {SafariViewPoc} from './src/components/safariview/SafariViewPOC';
import {InAppBrowserPOC} from './src/components/InAppBrowserPOC/InAppBrowserPOC';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Home />
          <Separator />
          <SafariViewPoc />
          <Separator />
          {/* <InAppBrowserPOC /> */}
          <Separator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
